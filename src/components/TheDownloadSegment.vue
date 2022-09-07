<template>
  <div class="ui segment main-segment">
    <div class="ui container the-download-container">
      <div class="title-header-container">
        <h1 class="ui header title-header main-header">
          {{ titleText }}
        </h1>

        <DownloadButton />
      </div>

      <div class="download-image-container">
        <img
          class="ui image rounded"
          src="@/assets/images/main.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
import DownloadButton from './TheDownloadSegment/DownloadButton.vue'

export default {
  name: 'TheDownloadSegment',
  components: {
    DownloadButton
  },
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
.the-download-container
  padding: 5em
  display: flex
  align-items: center

.title-header-container
  flex: 0.4
  text-align: right

.title-header
  color: white
  font-size: 4em !important
  line-height: 1em

.download-image-container
  margin-left: 4em
  flex: 0.6
</style>
