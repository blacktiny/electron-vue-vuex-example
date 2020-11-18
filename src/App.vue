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

#app {
  font-family: Work Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #868797;
}
</style>
