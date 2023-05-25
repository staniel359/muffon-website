<template>
  <div
    ref="segment"
    class="ui segment main-segment"
  >
    <div class="ui container main-container">
      <div class="ui center aligned four column stackable doubling relaxed grid">
        <NoAdsFeature />

        <NoPaymentsFeature />

        <NoLoginFeature />

        <NoSpamFeature />
      </div>

      <div class="notices-section">
        <h5 class="ui header main-header">
          <div
            class="sub header"
            v-text="noLoginNoticeText"
          />
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import NoAdsFeature from './TheExtraFeaturesSegment/NoAdsFeature.vue'
import NoPaymentsFeature from './TheExtraFeaturesSegment/NoPaymentsFeature.vue'
import NoLoginFeature from './TheExtraFeaturesSegment/NoLoginFeature.vue'
import NoSpamFeature from './TheExtraFeaturesSegment/NoSpamFeature.vue'

export default {
  name: 'TheExtraFeaturesSegment',
  components: {
    NoAdsFeature,
    NoPaymentsFeature,
    NoLoginFeature,
    NoSpamFeature
  },
  computed: {
    noLoginNoticeText () {
      return this.$t(
        'features.extra.noLoginNotice'
      )
    },
    visibilityOptions () {
      return {
        onBottomVisible:
          this.handleBottomVisible
      }
    },
    transitionOptions () {
      return {
        animation: 'fade up',
        duration: 750,
        interval: 250
      }
    }
  },
  mounted () {
    $(
      this.$refs.segment
    ).visibility(
      this.visibilityOptions
    )
  },
  methods: {
    handleBottomVisible () {
      $(
        '.extra-feature-item'
      ).transition(
        this.transitionOptions
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.column
  display: flex !important
  justify-content: center
  &:not(.transition)
    visibility: hidden

.main-header
  width: fit-content

.notices-section
  margin-top: 2em
</style>
