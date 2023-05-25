<template>
  <div class="ui segment main-segment">
    <div class="ui container the-top-container">
      <div class="title-header-container">
        <HeaderSection />

        <DownloadButton />
      </div>

      <div class="top-image-container">
        <img
          class="ui image rounded"
          :src="topImage"
        >
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from './TheTopSegment/HeaderSection.vue'
import DownloadButton from './TheTopSegment/DownloadButton.vue'
import topImage from '@/assets/images/main.png'

export default {
  name: 'TheTopSegment',
  components: {
    HeaderSection,
    DownloadButton
  },
  computed: {
    topImage () {
      return topImage
    }
  }
}
</script>

<style lang="sass" scoped>
.the-top-container
  padding: 10em 5em 5em
  display: flex !important
  align-items: center

.title-header-container
  flex: 0.4
  text-align: right

.top-image-container
  margin-left: 4em
  flex: 0.6
  .image
    border-radius: 0.75em !important
</style>
