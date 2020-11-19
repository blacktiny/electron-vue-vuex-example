<template>
  <div class="row match-tile" :class="[status]">
    <div class="row">
      <div class="match-tile__status">{{ status }}</div>
      <div class="col match-tile__info">
        <p>4 Hours Ago</p>
        <h4>Ranked Solo</h4>
        <p>34:06</p>
      </div>
    </div>

    <div class="row">
      <div class="row match-tile__avatar">
        <ProfileAvatarImg :level="matchData.champLevel" />
      </div>

      <div class="row match-tile__spells">
        <div class="match-tile__spells-container" v-for="spell in spells" :key="spell">
          <SpellImg />
        </div>
      </div>
    </div>

    <div class="col match-tile__kda">
      <h4>{{ matchData.kills }} / {{ matchData.deaths }} / {{ matchData.assists }}</h4>
      <p>4.20:1 KDA</p>
    </div>

    <div class="col match-tile__lvling">
      <h4>{{ matchData.cs }} CS</h4>
      <p>55% KP</p>
    </div>

    <div class="row match-tile__items">
      <div class="match-tile__items-container" v-for="item in matchData.build.slice(0, 6)" :key="item">
        <ItemImg :itemId="item" />
      </div>
    </div>

    <div class="col match-tile__teams">
      <div class="row">
        <div class="match-tile__teams-champion" v-for="champ in matchData.teamSummary.filter(champ => champ.teamId === 100)" :key="champ.championId">
          <ChampionImg team="red" />
        </div>
      </div>
      <div class="row">
        <div class="match-tile__teams-champion team-blue" v-for="(champ, index) in matchData.teamSummary.filter(champ => champ.teamId === 200)" :key="index" :style="{ zIndex: 10 - index }">
          <ChampionImg team="blue" />
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
</template>

<script>
import { Select } from '@/global/ui'
import { ChampionImg, ItemImg, ProfileAvatarImg, SpellImg } from '@/global/components'
import { SelectMatchActionData } from '@/global/utils/constants.js'

export default {
  name: 'MatchTile',
  components: {
    Select,
    ProfileAvatarImg,
    SpellImg,
    ItemImg,
    ChampionImg
  },
  props: {
    matchData: Array
  },
  data () {
    return {
      status: this.matchData.win ? 'victory' : 'defeat',
      spells: [11, 12, 3, 4],
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
.match-tile {
  justify-content: space-between;
  width: 100%;
  height: 80px;
  margin-bottom: 3px;
  padding-right: 35px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  box-sizing: border-box;

  & > div:first-child {
    height: 100%;
  }

  &.victory {
    background-color: #88d9a216;

    .match-tile__status {
      background-color: #57a773;
    }
  }
  &.defeat {
    background-color: #ee635216;

    .match-tile__status {
      background-color: #ee6352;
    }
  }
  &.remake {
    background-color: #b6b7c616;

    .match-tile__status {
      background-color: #44465d;
    }
  }

  &:hover {
    background: #00000D;
    box-shadow: 0px 0px 30px #000000;
  }

  &__status {
    width: 25px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: 'Work Sans Bold';
    color: white;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: uppercase;
    transform: rotate(180deg);
    margin-right: 30px;
  }

  &__info {
    width: 100px;
    align-items: flex-start;

    h4 {
      color: #eaeaee;
    }
  }

  &__spells {
    flex-wrap: wrap;
    width: 46px;
    margin: 1.5px 0 0 10px;
  }

  &__kda {
    width: 70px;

    h4 {
      color: #eaeaee;
    }
  }

  &__lvling {
    width: 50px;

    h4 {
      color: #eaeaee;
      margin-bottom: 14px;
    }
  }

  &__items {
    flex-wrap: wrap;
    width: 70px;
    margin-top: 1.5px;
  }

  &__teams {
    & > div:nth-child(1) {
      margin-left: 10px;
    }

    & > div > div:nth-child(1) {
      margin-left: 0;
    }

    &-champion {
      margin-left: -3px;

      &.team-blue {
        margin-left: 0;
        margin-right: -3px;
      }
    }
  }

  @media (max-width: 992px) {
    padding-right: 20px;

    &__status {
      margin-right: 20px;
    }

    &__spells {
      display: none;
    }

    &__items {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &__teams {
      display: none;
    }
  }
}
</style>
