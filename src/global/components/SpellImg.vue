<template>
  <div class="spell-img-container">
    <div class="spell-img"></div>
  </div>
</template>

<script>
export default {
  name: 'SpellImg',
  props: {
    spellId: Number
  }
}
</script>

<style lang="scss" scoped>
.spell-img-container {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin: 0 3px 3px 0;
}

.spell-img {
  position: relative;
  width: 48px;
  height: 48px;
  background-image: url(https://ddragon.leagueoflegends.com/cdn/10.23.1/img/sprite/spell0.png);
  background-repeat: no-repeat;
  background-position: -192px 0px;
  border-radius: 10px;
  transform-origin: left top;
  transform: scale(0.4);
}
</style>
