<template>
  <div class="page-wrapper">
    <div class="match-history page-content">
      <div class="match-history__header">
        <div class="row title">
          <img src='@/assets/icons/bar-chart-2.png' alt="chart" />
          <h4>Your Latest Match Analysis</h4>
        </div>

        <div class="divider"></div>

        <div class="row match-analysis-tile">
          <div class="match-status">Victory</div>
          <div class="col">
            <div class="row match-title">
              <img src='@/assets/icons/role_top.png' alt="top" />
              <h4>Cyber Schnitzel</h4>
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
                    <div class="item" v-for="item in items.slice(0, 6)" :key="{item}">
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
                  <span>14</span> / <span>5</span> / <span>7</span>
                </p>
                <p class="match-info__kda2">4.20:1 KDA</p>
                <p class="match-info__lvling1">160 CS</p>
                <p class="match-info__lvling2">55% KP</p>
              </div>

              <div class="col champion-matchups">
                <div class="row champion-matchup">
                  <p class="champion-name">Lorem</p>
                  <ChampionImg />
                  <img class="champion-role" src="@/assets/icons/role_top.png" alt="top" />
                  <ChampionImg />
                  <p class="champion-name">Lorem</p>
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
          <div class="matches-header__filter">
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
        <MatchTile />
      </div>
    </div>
  </div>
</template>

<script>
import { Select } from '@/global/ui'
import { ChampionImg, ItemImg, SpellImg } from '@/global/components'
import MatchTile from './MatchTile'
import { IconBase, IconArrowLeft, IconArrowRight } from '@/global/icons'
import { SelectMatchActionData } from '@/global/utils/constants.js'

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
    MatchTile,
    IconBase,
    IconArrowLeft,
    IconArrowRight
  },
  data () {
    return {
      items: [1402, 3100, 3152, 3020, 3165, 0, 3364],
      matchActionData: [...SelectMatchActionData],
      selectedActions: []
    }
  },
  methods: {
    updateLatestMatchAnalysis(updatedActions) {
      this.selectedActions = updatedActions
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
        font-weight: bold;
        color: white;
        background-color: #57a773;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        text-transform: uppercase;
        transform: rotate(180deg);
        margin-right: 25px;
      }

      .match-title {
        padding-top: 3px;
        margin-bottom: 18px;

        img {
          width: 15px;
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

        .spells-group {}

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
            font-weight: bold;
          }
        }

        &__time {
          margin-bottom: 20px;
        }

        &__kda1 {
          font-size: 14px;
          font-weight: bold;

          span:nth-child(1) {
            color: #88d9a2;
          }
          span:nth-child(2) {
            color: #ee6352;
          }
        }

        &__lvling1 {
          color: #eaeaee;
          font-weight: bold;
          margin: 2px 0 3px;
        }
      }

      .champion-matchups {
        .champion-matchup {
          .champion-name {
            font-size: 10px;
            color: #86b7c6;
            padding: 0 10px;
          }

          .champion-role {
            width: 13px;
            margin: 0 7px 0 5px;
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
  }
}
</style>
