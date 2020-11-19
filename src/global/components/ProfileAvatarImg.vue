<template>
  <div class="profile-avatar-container" :class="[ isBorder ? 'has-border' : '', team ]">
    <div class="avatar-img"></div>
    <div class="level" v-if="level">{{ level }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAvatarImg',
  props: {
    isBorder: {
      default: true,
      type: Boolean
    },
    size: {
      default: 44,
      type: Number
    },
    level: {
      default: 0,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-avatar-container {
  position: relative;
  width: 54px;
  height: 54px;
  border: 2px solid #1c1f33;
  border-radius: 50%;
  box-sizing: border-box;
}

.avatar-img {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(https://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/4658.png);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
}

.level {
  position: absolute;
  left: calc(50% - 8px);
  bottom: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  font-family: 'Work Sans Bold';
  border-radius: 50%;
  background-color: black;
}
</style>
