<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container features-container">
      <CrossPlatformFeature />

      <div class="no-features-section">
        <NoAdsFeature />

        <NoPaymentsFeature />

        <NoSpamFeature />
      </div>
    </div>
  </div>
</template>

<script>
import CrossPlatformFeature
  from './TheFeaturesSegment/CrossPlatformFeature.vue'
import NoAdsFeature from './TheFeaturesSegment/NoAdsFeature.vue'
import NoPaymentsFeature from './TheFeaturesSegment/NoPaymentsFeature.vue'
import NoSpamFeature from './TheFeaturesSegment/NoSpamFeature.vue'

export default {
  name: 'TheFeaturesSegment',
  components: {
    CrossPlatformFeature,
    NoAdsFeature,
    NoPaymentsFeature,
    NoSpamFeature
  }
}
</script>

<style lang="sass" scoped>
.features-container
  display: flex
  flex-direction: column
  align-items: center

.no-features-section
  margin-top: 2em
  display: flex
  align-items: center

.no-feature
  &:not(:first-child)
    margin-left: 2em
</style>
