<template>
  <IconBase :icon-name="roleList[roleId].name" :width="width" :height="height">
    <IconRoleTop v-if="roleList[roleId].name === 'top'" />
    <IconRoleBottom v-if="roleList[roleId].name === 'bottom'" />
    <IconRoleJungle v-if="roleList[roleId].name === 'jungle'" />
    <IconRoleMid v-if="roleList[roleId].name === 'mid'" />
    <IconRoleSupport v-if="roleList[roleId].name === 'support'" />
  </IconBase>
</template>

<script>
import IconBase from './IconBase'
import IconRoleBottom from './IconRoleBottom'
import IconRoleTop from './IconRoleTop'
import IconRoleJungle from './IconRoleJungle'
import IconRoleMid from './IconRoleMid'
import IconRoleSupport from './IconRoleSupport'

export default {
  name: 'IconRole',
  components: {
    IconBase,
    IconRoleBottom,
    IconRoleJungle,
    IconRoleMid,
    IconRoleSupport,
    IconRoleTop
  },
  props: {
    roleId: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  data () {
    return {
      roleList: [
        {
          name: 'top',
        },
        {
          name: 'bottom',
        },
        {
          name: 'jungle',
        },
        {
          name: 'mid',
        },
        {
          name: 'support',
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>