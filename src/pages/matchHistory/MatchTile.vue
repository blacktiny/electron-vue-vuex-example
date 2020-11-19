<template>
  <div class="row match-tile" :class="[status]">
    <div class="match-tile__status">Victory</div>
    <div class="col match-tile__info">
      <p>4 Hours Ago</p>
      <h4>Ranked Solo</h4>
      <p>34:06</p>
    </div>

    <div class="row">
      <div class="row match-tile__avatar">
        <ProfileAvatarImg />
      </div>

      <div class="row match-tile__spells">
        <div class="match-tile__spells-container" v-for="spell in spells" :key="spell">
          <SpellImg />
        </div>
      </div>
    </div>

    <div class="col match-tile__kda">
      <h4>14 / 5 / 7</h4>
      <p>4.20:1 KDA</p>
    </div>

    <div class="col match-tile__lvling">
      <h4>160 CS</h4>
      <p>55% KP</p>
    </div>

    <div class="row match-tile__items">
      <div class="match-tile__items-container" v-for="item in items.slice(0, 6)" :key="item">
        <ItemImg :itemId="item" />
      </div>
    </div>

    <div class="col match-tile__teams">
      <div class="row">
        <div class="match-tile__teams-champion" v-for="champ in teamSummary.filter(champ => champ.teamId === 100)" :key="champ.championId">
          <ChampionImg team="red" />
        </div>
      </div>
      <div class="row">
        <div class="match-tile__teams-champion" v-for="champ in teamSummary.filter(champ => champ.teamId === 200)" :key="champ.championId">
          <ChampionImg team="blue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChampionImg, ItemImg, ProfileAvatarImg, SpellImg } from '@/global/components'

export default {
  name: 'MatchTile',
  components: {
    ProfileAvatarImg,
    SpellImg,
    ItemImg,
    ChampionImg
  },
  props: {
    status: {
      default: 'victory',
      type: String
    }
  },
  data: () => ({
    spells: [11, 12, 3, 4],
    items: [1402, 3100, 3152, 3020, 3165, 0, 3364],
    teamSummary: [
      {
        "championId": 518,
        "roleId": 4,
        "summonerName": "Yoshiane",
        "teamId": 100
      },
      {
        "championId": 28,
        "roleId": 3,
        "summonerName": "Desolarus",
        "teamId": 100
      },
      {
        "championId": 10,
        "roleId": 2,
        "summonerName": "HF Yuno",
        "teamId": 100
      },
      {
        "championId": 81,
        "roleId": 1,
        "summonerName": "Tarky",
        "teamId": 100
      },
      {
        "championId": 53,
        "roleId": 0,
        "summonerName": "ardakyrozgr",
        "teamId": 100
      },
      {
        "championId": 246,
        "roleId": 4,
        "summonerName": "Fric",
        "teamId": 200
      },
      {
        "championId": 75,
        "roleId": 3,
        "summonerName": "LaRuSs",
        "teamId": 200
      },
      {
        "championId": 8,
        "roleId": 2,
        "summonerName": "ZjeIympth ",
        "teamId": 200
      },
      {
        "championId": 29,
        "roleId": 1,
        "summonerName": "SheHasBF GO NEXT",
        "teamId": 200
      },
      {
        "championId": 25,
        "roleId": 0,
        "summonerName": "ÊnesÂbi",
        "teamId": 200
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.match-tile {
  width: 100%;
  height: 80px;
  margin-bottom: 3px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &.victory {
    background-color: #88d9a216;
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
    font-weight: bold;
    color: white;
    background-color: #57a773;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: uppercase;
    transform: rotate(180deg);
    margin-right: 30px;
  }

  &__info {
    width: 156px;
    align-items: flex-start;

    h4 {
      color: #eaeaee;
    }
  }

  &__avatar {

  }

  &__spells {
    flex-wrap: wrap;
    width: 46px;
    margin-left: 10px;
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
    }
  }

  &__items {
    flex-wrap: wrap;
    width: 70px;
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
    }
  }
}
</style>
