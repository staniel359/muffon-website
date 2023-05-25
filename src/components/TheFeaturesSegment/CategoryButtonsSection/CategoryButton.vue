<template>
  <div
    class="ui button big circular compact category-button"
    :class="buttonClass"
    @click="handleClick"
    v-text="featureText"
  />
</template>

<script>
export default {
  name: 'CategoryButton',
  props: {
    categoryCode: {
      type: String,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  emits: [
    'click'
  ],
  computed: {
    buttonClass () {
      if (this.isSelected) {
        return 'primary'
      } else {
        return 'basic'
      }
    },
    isSelected () {
      return (
        this.categoryCode ===
          this.selected
      )
    },
    featureText () {
      return this.$t(
        `features.categories.${this.categoryCode}`
      )
    }
  },
  methods: {
    handleClick () {
      this.$emit(
        'click',
        this.categoryCode
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.category-button
  margin: 0
  &:not(:first-child)
    margin-left: 0.5em
</style>
