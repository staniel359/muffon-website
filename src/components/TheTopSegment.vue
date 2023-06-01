<template>
  <div class="ui segment main-segment">
    <div class="ui container the-top-container">
      <div
        ref="leftSection"
        class="title-header-container"
      >
        <HeaderSection />

        <DownloadButton />
      </div>

      <div
        ref="rightSection"
        class="top-image-container"
      >
        <img
          class="ui image"
          :src="topImage"
        >
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from './TheTopSegment/HeaderSection.vue'
import DownloadButton from './TheTopSegment/DownloadButton.vue'
import topImage from '@/assets/images/preview.png'

export default {
  name: 'TheTopSegment',
  components: {
    HeaderSection,
    DownloadButton
  },
  computed: {
    topImage () {
      return topImage
    },
    leftSectionTransitionOptions () {
      return {
        animation: 'fade right',
        duration: 750
      }
    },
    rightSectionTransitionOptions () {
      return {
        animation: 'fade up',
        duration: 750
      }
    }
  },
  mounted () {
    $(
      this.$refs.leftSection
    ).transition(
      this.leftSectionTransitionOptions
    )

    $(
      this.$refs.rightSection
    ).transition(
      this.rightSectionTransitionOptions
    )
  }
}
</script>

<style lang="sass" scoped>
.the-top-container
  padding: 10em 5em 5em
  display: flex !important
  align-items: center
  height: 520px

.title-header-container
  visibility: hidden
  flex: 0.4
  text-align: right

.top-image-container
  visibility: hidden
  margin-left: 3em
  flex: 0.6
</style>
