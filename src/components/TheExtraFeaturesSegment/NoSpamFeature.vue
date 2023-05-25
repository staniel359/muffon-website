<template>
  <div class="feature-item">
    <h2 class="ui inverted header main-header">
      <i class="icons">
        <i class="large red dont icon" />

        <i class="small envelope icon" />
      </i>

      <div
        class="content"
        v-text="noSpamText"
      />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NoSpamFeature',
  computed: {
    noSpamText () {
      return this.$t(
        'features.extra.noSpam'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
