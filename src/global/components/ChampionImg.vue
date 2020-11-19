<template>
  <div class="champion-img-container" :class="[ isBorder ? 'has-border' : '', team ]">
    <div class="champion-img"></div>
  </div>
</template>

<script>
export default {
  name: 'ChampionImg',
  props: {
    isBorder: {
      default: true,
      type: Boolean
    },
    size: {
      default: 21,
      type: Number
    },
    level: {
      default: 0,
      type: Number
    },
    team: {
      default: 'blue',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-img-container {
  position: relative;
  width: 21px;
  height: 21px;
  padding: 1px;
  border-radius: 50%;
  box-sizing: border-box;

  &.has-border.blue {
    border: 1px solid #3454d1;
  }
  &.has-border.red {
    border: 1px solid #ee6352;
  }
}

.champion-img {
  position: relative;
  width: 48px;
  height: 48px;
  background-image: url(https://ddragon.leagueoflegends.com/cdn/10.23.1/img/sprite/champion3.png);
  background-repeat: no-repeat;
  background-position: -386px 0px;
  border-radius: 0px;
  transform-origin: left top;
  transform: scale(0.37);
  border-radius: 50%;
}
</style>
