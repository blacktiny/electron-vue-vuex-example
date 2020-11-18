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
                  <div class="spell">
                    <div class="spell-img"></div>
                  </div>
                  <div class="spell">
                    <div class="spell-img"></div>
                  </div>
                </div>
                <div class="row items-group">
                  <div class="main-items">
                    <div class="item" v-for="spell in spells.slice(0, 6)" :key="{spell}">
                      <div class="item-img"></div>
                    </div>
                  </div>
                  <div class="item last-item">
                    <div class="item-img"></div>
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
        </div>
      </div>
      <div class="match-history__content">

      </div>
    </div>
  </div>
</template>

<script>
import ChampionImg from './ChampionImg'

export default {
  name: 'MatchHistory',
  props: {
    msg: String
  },
  components: {
    ChampionImg
  },
  data: () => ({
    spells: [1402, 3100, 3152, 3020, 3165, 0, 3364]
  })
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
      padding: 20px 16px;
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
        margin-bottom: 20px;

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

        .spells-group .spell,
        .items-group .item {
          width: 19.2px;
          height: 19.2px;
          margin: 0 3px 3px 0;
          border-radius: 3px;
        }

        .spells-group .spell .spell-img,
        .items-group .item .item-img {
          position: relative;
          width: 48px;
          height: 48px;
          background-repeat: no-repeat;
          transform: scale(0.4);
          transform-origin: left top;
        }

        .spells-group {
          div:nth-child(1) {
            .spell-img {
              background-position: -192px 0px;
            }
          }
          div:nth-child(2) {
            .spell-img {
              background-position: -240px 0px;
            }
          }

          .spell-img {
            background-image: url(https://ddragon.leagueoflegends.com/cdn/10.23.1/img/sprite/spell0.png);
            border-radius: 0px;
          }
        }

        .items-group {
          margin-top: 12px;

          .main-items {
            display: flex;
            flex-wrap: wrap;
            width: 67px;

            div:nth-child(1) {
              .item-img {
                background-position: -192px -288px;
              }
            }
            div:nth-child(2) {
              .item-img {
                background-position: -240px -288px;
              }
            }
          }

          .item-img {
            background-color: rgb(28, 31, 51);
            background-image: url(https://ddragon.leagueoflegends.com/cdn/10.23.1/img/sprite/item0.png);
            background-position: -192px -288px;
            border-radius: 8px;
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
    }
  }

  &__content {

  }
}
</style>
