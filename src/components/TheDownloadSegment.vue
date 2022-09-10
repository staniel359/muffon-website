<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container download-container">
      <DownloadButton />
    </div>
  </div>
</template>

<script>
import DownloadButton from './TheDownloadSegment/DownloadButton.vue'

export default {
  name: 'TheDownloadSegment',
  components: {
    DownloadButton
  }
}
</script>

<style lang="sass" scoped>
.download-container
  display: flex !important
  justify-content: center
</style>
