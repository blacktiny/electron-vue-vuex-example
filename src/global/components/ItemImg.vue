<template>
  <div class="item-img-container">
    <div class="item-img" v-if="itemId !== 0"></div>
  </div>
</template>

<script>
export default {
  name: 'ItemImg',
  props: {
    itemId: Number
  }
}
</script>

<style lang="scss" scoped>
.item-img-container {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin: 0 3px 3px 0;
  background-color: #868797;
}

.item-img {
  position: relative;
  width: 48px;
  height: 48px;
  background-image: url(https://ddragon.leagueoflegends.com/cdn/10.23.1/img/sprite/item0.png);
  background-repeat: no-repeat;
  background-position: -192px -240px;
  border-radius: 10px;
  transform-origin: left top;
  transform: scale(0.42);
}
</style>
