<template>
  <div class="ui-select">
    <div class="ui-select__menu" v-on:click="openOptionsList" :class="{ 'opened': isOpened }">
      {{name ? name : 'Select'}}
      <IconBase width="10" height="8" icon-name="icon-arrow-down">
        <IconArrowUp v-if="isOpened" />
        <IconArrowDown v-if="!isOpened" />
      </IconBase>
    </div>

    <div class="col ui-select__options-list" v-if="isOpened">
      <div class="ui-select__options-list__wrapper" v-on:click="closeOptionsList"></div>
      <div class="ui-select__options-list__item"
        v-for="option in options"
        :key="option.value"
        :class="[selected && selected.includes(option.value) ? 'selected' : '']"
        v-on:click="onOptionItemSelect(option.value)"
      >
        {{option.label}}
      </div>
    </div>
  </div>
</template>

<script>
import { IconBase, IconArrowDown, IconArrowUp } from '@/global/icons'

export default {
  name: 'Select',
  components: {
    IconBase,
    IconArrowDown,
    IconArrowUp
  },
  props: {
    name: String,
    options: {
      default: null,
      type: Array,
      required: true
    },
    selected: Array,
    value: String,
    isMulti: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    openOptionsList() {
      this.isOpened = true
    },
    closeOptionsList() {
      this.isOpened = false
    },
    onOptionItemSelect(value) {
      if (this.isMulti) {
        const newSelected = this.selected ? JSON.parse(JSON.stringify(this.selected)) : []
        const indexOfMatchedValue = newSelected ? newSelected.findIndex(optionVal => optionVal === value) : -1
        if (indexOfMatchedValue < 0)
          newSelected.push(value)
        else
          newSelected.splice(indexOfMatchedValue, 1)
  
        this.$emit('on-selected', newSelected)
      } else {
        this.isOpened = false
        this.$emit('on-selected', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-select {
  position: relative;

  &__menu {
    width: 151px;
    height: 36px;
    background-color: #002c9f;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    padding: 12px 30px 10px 22px;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 3;
    transition: background 0.2s ease-out;

    &.opened {
      svg {
        z-index: 6;
      }
    }

    &:hover {
      background-color: #0742d6;
    }

    svg {
      position: absolute;
      top: 16px;
      right: 14px;
    }
  }

  &__options-list {
    position: absolute;
    top: 1px;
    width: 100%;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    animation: dropdown-show 0.2s ease-out;
    transform-origin: top;
    z-index: 4;

    @keyframes dropdown-show {
      0% {
        transform: scaleY(0.25);
      }

      100% {
        transform: scaleY(1);
      }
    }

    &__wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 4;
      cursor: default;
    }

    &__item {
      width: 100%;
      height: 34px;
      background-color: #404245;
      padding: 10px 0;
      box-sizing: border-box;
      transition: background 0.25s ease-out;
      cursor: pointer;
      z-index: 5;

      &.selected {
        background-color: #002c9f;
      }

      &:hover {
        background-color: #002c9f;
      }
    }
  }
}

.ui-select__menu,
.ui-select__options-list__item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: 'Work Sans Bold';
  line-height: 14px;
  color: white;
}

</style>
