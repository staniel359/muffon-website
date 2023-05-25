<template>
  <div class="header-section">
    <h1
      class="ui inverted header main-header"
      v-text="servicesText"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  computed: {
    servicesText () {
      return this.$t(
        'services'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.header-section
  margin-bottom: 1.5em
</style>
