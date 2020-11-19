<template>
  <div class="page-wrapper">
    <div class="match-history page-content">
      <div class="match-history__header">
        <div class="row title">
          <IconBase width="16" height="20" icon-name="icon-chart">
            <IconChart />
          </IconBase>
          <h4>Your Latest Match Analysis</h4>
        </div>

        <div class="divider"></div>

        <div class="row match-analysis-tile">
          <div class="match-status" :class="[matchStatus]">{{ matchStatus }}</div>
          <div class="col">
            <div class="row match-title">
              <IconBase width="15" height="15" icon-name="icon-role-top">
                <IconRoleTop />
              </IconBase>
              <h4>{{ lastMatchData.summonerName }}</h4>
            </div>
            <div class="row">
              <div class="row hero-info">
                <div class="hero-info__avatar-img">
                  <img src='https://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/4658.png' alt='avatar' />
                </div>
                <div class="spells-group">
                  <SpellImg />
                  <SpellImg />
                </div>
                <div class="row items-group">
                  <div class="main-items">
                    <div class="item" v-for="item in lastMatchData.build.slice(0, 6)" :key="{item}">
                      <ItemImg />
                    </div>
                  </div>
                  <div class="item last-item">
                    <ItemImg />
                  </div>
                </div>
              </div>

              <div class="col match-info">
                <p class="match-info__duration">Duration: <span>34:12</span></p>
                <p class="match-info__time">4 Hours Ago</p>
                <p class="match-info__kda1">
                  <span>{{ lastMatchData.kills }}</span> / <span>{{ lastMatchData.deaths }}</span> / <span>{{ lastMatchData.assists }}</span>
                </p>
                <p class="match-info__kda2">4.20:1 KDA</p>
                <p class="match-info__lvling1">{{ lastMatchData.cs }} CS</p>
                <p class="match-info__lvling2">55% KP</p>
              </div>

              <div class="col champion-matchups">
                <div class="row champion-matchup" v-for="champPair in matchupData" :key="champPair.roleId">
                  <p class="champion-name">{{ champPair.blueChamp.summonerName }}</p>
                  <ChampionImg />
                  <IconRole :roleId="champPair.roleId" width="13" height="13" />
                  <ChampionImg team="red" />
                  <p class="champion-name red">{{ champPair.redChamp.summonerName }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="select-action-container">
            <Select
              name="SELECT ACTION"
              :options="matchActionData"
              :selected="selectedActions"
              isMulti
              @on-selected="updateLatestMatchAnalysis"
            />
          </div>
        </div>
      </div>

      <div class="col match-history__content">
        <div class="row matches-header">
          <div class="row matches-header__filter">
            <MatchFilterbar
              :options="matchFilterData"
              :selected="selectedFilters"
              @on-updated="updateMatchFilters"
            />
          </div>

          <div class="row matches-header__navigator">
            <div class="button-navigator navigator-prev disabled">
              <IconBase width="8" height="14" icon-name="navigator-prev">
                <IconArrowLeft />
              </IconBase>
            </div>
            <div class="navigator-label">
              <p>1 / 10 of 250</p>
            </div>
            <div class="button-navigator navigator-right">
              <IconBase width="8" height="14" icon-name="navigator-next">
                <IconArrowRight />
              </IconBase>
            </div>
          </div>
        </div>
        
        <div class="col matches-list scrollbar">
          <div class="matches-list-item" v-for="(match, i) in matchesHistoryData" :key="i">
            <MatchTile :matchData="match" status="victory" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Select } from '@/global/ui'
import { ChampionImg, ItemImg, SpellImg } from '@/global/components'
import MatchFilterbar from './MatchFilterbar'
import MatchTile from './MatchTile'
import { IconBase, IconArrowLeft, IconArrowRight, IconChart, IconRole, IconRoleTop } from '@/global/icons'
import { SelectMatchActionData, MatchFilterData } from '@/global/utils/constants.js'
import mockup from '@/global/mockup/MatchHistory.json'

export default {
  name: 'MatchHistory',
  props: {
    msg: String
  },
  components: {
    Select,
    ChampionImg,
    SpellImg,
    ItemImg,
    MatchFilterbar,
    MatchTile,
    IconBase,
    IconArrowLeft,
    IconArrowRight,
    IconChart,
    IconRole,
    IconRoleTop
  },
  data () {
    return {
      lastMatchData: mockup.analysis[0],
      matchStatus: mockup.analysis[0].win ? 'victory' : 'defeat',
      matchesHistoryData: mockup.matches[0].results,
      items: [1402, 3100, 3152, 3020, 3165, 0, 3364],
      matchActionData: [...SelectMatchActionData],
      matchFilterData: [...MatchFilterData],
      selectedActions: [],
      selectedFilters: [...MatchFilterData]
    }
  },
  computed: {
    blueTeam: function () {
      const blueTeam = this.lastMatchData.teamSummary.filter(champ => champ.teamId === 100)
      blueTeam.sort((item1, item2) => item1.roleId - item2.roleId)
      return blueTeam
    },
    redTeam: function () {
      const redTeam = this.lastMatchData.teamSummary.filter(champ => champ.teamId === 200)
      redTeam.sort((item1, item2) => item1.roleId - item2.roleId)
      return redTeam
    },
    matchupData: function () {
      let self = this
      return this.blueTeam.map((champ, index) => {
        return {
          roleId: champ.roleId,
          blueChamp: self.blueTeam[index],
          redChamp: self.redTeam[index]
        }
      })
    }
  },
  methods: {
    updateLatestMatchAnalysis(updatedActions) {
      this.selectedActions = updatedActions
    },
    updateMatchFilters(updatedFilters) {
      this.selectedFilters = updatedFilters
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  background-image: url(https://app.senpai.gg/_nuxt/img/bg.2cc8135.jpg);
  background-size: cover;
  background-position: 50%;
}

.match-history {
  &__header {
    width: 100%;
    margin-bottom: 27px;

    .title {
      padding-left: 10px;

      h4 {
        padding-left: 10px;
      }
    }

    .divider {
      width: calc(100% - 20px);
      height: 1px;
      background-color: #1c1f33;
      margin-top: 8px;
      margin-left: 10px;
    }

    .match-analysis-tile {
      position: relative;
      width: 100%;
      height: 178px;
      background-color: #00000d;
      padding: 20px 32px 20px 16px;
      box-sizing: border-box;

      .match-status {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 100%;
        font-size: 14px;
        font-family: 'Work Sans Bold';
        color: white;
        background-color: #57a773;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        text-transform: uppercase;
        transform: rotate(180deg);
        margin-right: 25px;

        &.victory {
          background-color: #57a773;
        }
        &.defeat {
          background-color: #ee6352;
        }
      }

      .match-title {
        padding-top: 8px;
        margin-bottom: 15px;

        svg {
          margin-right: 10px;
        }

        h4 {
          color: #b6b7c6;
        }
      }

      .hero-info {
        flex-wrap: wrap;
        width: 100px;
        margin-right: 25px;

        &__avatar-img {
          width: 44px;
          height: 44px;
          margin-right: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .spells-group {
          & > div:last-child {
            margin-bottom: 0;
          }
        }

        .items-group {
          margin-top: 12px;

          .main-items {
            display: flex;
            flex-wrap: wrap;
            width: 70px;
          }
        }
      }

      .match-info {
        align-items: flex-start;

        &__duration {
          font-size: 14px;
          margin-bottom: 2px;

          span {
            font-family: 'Work Sans Bold';
          }
        }

        &__time {
          margin-bottom: 20px;
        }

        &__kda1 {
          font-size: 14px;
          font-family: 'Work Sans Bold';

          span:nth-child(1) {
            color: #88d9a2;
          }
          span:nth-child(2) {
            color: #ee6352;
          }
        }

        &__lvling1 {
          color: #eaeaee;
          font-family: 'Work Sans Bold';
          margin: 2px 0 3px;
        }
      }

      .champion-matchups {
        align-content: center;
        
        & > div:last-child {
          margin-bottom: 0;
        }

        .champion-matchup {
          margin-bottom: 3px;

          .champion-name {
            min-width: 70px;
            font-size: 10px;
            padding: 0 10px;
            text-align: right;

            &.red {
              text-align: left;
            }
          }

          svg {
            margin: 0 7px 0 5px;
            g {
              width: 13px;
              height: 13px;
            }
          }
        }
      }

      .select-action-container {
        margin-left: auto;
      }
    }
  }

  &__content {
    .matches-header {
      margin-bottom: 10px;

      &__filter {
        width: calc(100% - 165px);
      }

      &__navigator {
        .button-navigator {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background-color: #44465d;
          cursor: pointer;
          transition: background 0.3s ease-in-out;

          &.disabled {
            background-color: #1c1f33;
            cursor: not-allowed;

            &:hover {
              background-color: #1c1f33;
            }
          }

          &:hover {
            background-color: #6e7088;
          }
        }

        .navigator-label {
          padding: 0 15px;
        }
      }
    }

    .matches-list {
      height: 580px;
    }
  }

  @media (max-width: 768px) {
    &__header {
      .match-analysis-tile {
        .champion-matchups {
          display: none;
        }
      }
    }
  }
}
</style>
