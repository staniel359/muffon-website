<template>
  <div class="feature-item">
    <h2 class="ui inverted header main-header">
      <i class="icons">
        <i class="large red dont icon" />

        <i class="small money check alternate icon" />
      </i>

      <div
        class="content"
        v-text="noAdsText"
      />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NoAdsFeature',
  computed: {
    noAdsText () {
      return this.$t(
        'features.extra.noAds'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
