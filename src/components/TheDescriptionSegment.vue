<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container">
      <h2
        class="ui header center aligned main-header description-header"
        v-html="descriptionText"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDescriptionSegment',
  computed: {
    descriptionText () {
      return this.$t(
        'description'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.description-header
  font-weight: 400 !important
  font-size: 1.5em !important
  line-height: 1.5em !important
</style>
