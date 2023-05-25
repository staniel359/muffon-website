<template>
  <div class="header-section">
    <h1
      class="ui inverted header main-header"
      v-text="featuresText"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  computed: {
    featuresText () {
      return this.$t(
        'features.header'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.header-section
  margin-bottom: 1.5em
</style>
