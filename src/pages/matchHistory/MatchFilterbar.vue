<template>
  <div class="row match-filter">
    <div class="row match-filter__selected-list">
      <div class="row match-filter__selected-list__item" v-for="option in selected" :key="option.value" v-on:click="removeFilter(option.value)">
        {{ option.label }}
        <IconBase width="8" height="8" icon-name="icon-filter"><IconClose /></IconBase>
      </div>
    </div>
    <div class="row match-filter__button">
      <IconBase width="12" height="12" icon-name="icon-filter"><IconFilter /></IconBase>
      Filter
    </div>
  </div>
</template>

<script>
import { IconBase, IconClose, IconFilter } from '@/global/icons'

export default {
  name: 'MatchFilterbar',
  components: {
    IconBase,
    IconClose,
    IconFilter
  },
  props: {
    options: {
      default: null,
      type: Array,
      required: true
    },
    selected: {
      default: null,
      type: Array
    }
  },
  methods: {
    removeFilter(value) {
      const newSelected = JSON.parse(JSON.stringify(this.selected))
      const indexOfMatchedValue = newSelected.findIndex(option => option.value === value)
      if (indexOfMatchedValue > 0)
        newSelected.splice(indexOfMatchedValue, 1)

      console.log('newSelected = ', newSelected)

      this.$emit('on-updated', newSelected)
    }
  }
}
</script>

<style lang="scss" scoped>
.match-filter {
  width: 100%;

  &__selected-list {
    width: 100%;
    flex-wrap: wrap;

    &__item {
      padding: 9px 5px;
      font-size: 10px;
      line-height: 12px;
      background-color: #00000d;
      margin-right: 5px;
      cursor: pointer;
      transition: background 0.3s ease-out;

      &:hover {
        background-color: #34343a;
      }

      svg {
        margin-top: -2px;
        margin-left: 10px;
      }
    }
  }

  &__button {
    color: white;
    margin: 0 14px;
    cursor: pointer;

    svg {
      margin-right: 10px;
    }
  }
}
</style>
