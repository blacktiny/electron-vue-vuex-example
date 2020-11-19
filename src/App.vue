<template>
  <MatchHistory />
</template>

<script>
import MatchHistory from './pages/matchHistory/MatchHistory'

export default {
  name: 'App',
  components: {
    MatchHistory
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/globalStyles.scss';

@font-face {
  font-family: 'Work Sans';
  src: local('Work'), url('./assets/fonts/Work_Sans/WorkSans-Regular.ttf') format('opentype');
}

@font-face {
  font-family: 'Work Sans Bold';
  src: local('Work'), url('./assets/fonts/Work_Sans/WorkSans-Bold.ttf') format('opentype');
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  color: #868797;
}
</style>
