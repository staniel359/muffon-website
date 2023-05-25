<template>
  <div class="header-section">
    <h1
      class="ui header title-header main-header"
      v-text="titleText"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  computed: {
    titleText () {
      return this.$t(
        'title'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.header-section
  margin-bottom: 3em

.title-header
  color: white
  font-size: 3.6em !important
  line-height: 1em !important
</style>
