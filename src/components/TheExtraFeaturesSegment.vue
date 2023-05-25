<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container features-container">
      <NoAdsFeature />

      <NoPaymentsFeature />

      <NoSpamFeature />
    </div>
  </div>
</template>

<script>
import NoAdsFeature from './TheExtraFeaturesSegment/NoAdsFeature.vue'
import NoPaymentsFeature from './TheExtraFeaturesSegment/NoPaymentsFeature.vue'
import NoSpamFeature from './TheExtraFeaturesSegment/NoSpamFeature.vue'

export default {
  name: 'TheExtraFeaturesSegment',
  components: {
    NoAdsFeature,
    NoPaymentsFeature,
    NoSpamFeature
  }
}
</script>

<style lang="sass" scoped>
.features-container
  display: flex !important
  justify-content: center

.feature-item
  &:not(:first-child)
    margin-left: 2em
</style>
