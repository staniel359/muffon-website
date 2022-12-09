<template>
  <div class="downloads-section">
    <div class="ui basic large inverted label downloads-label">
      <i class="download icon" />

      <span
        v-html="downloadsCountFormatted"
      />
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'

export default {
  name: 'DownloadsSection',
  props: {
    releases: {
      type: Array,
      required: true
    }
  },
  computed: {
    downloadsCountFormatted () {
      return this.downloadsCount.toLocaleString(
        this.language
      )
    },
    downloadsCount () {
      return this.downloadsCounts.reduce(
        this.sum
      )
    },
    downloadsCounts () {
      return this.releases.flatMap(
        this.formatReleaseData
      )
    },
    language () {
      return i18n.global.locale
    }
  },
  methods: {
    formatReleaseData (
      releaseData
    ) {
      return releaseData.assets.map(
        this.formatAssetData
      )
    },
    formatAssetData (
      assetData
    ) {
      return assetData.download_count
    },
    sum (
      first,
      second
    ) {
      return first + second
    }
  }
}
</script>

<style lang="sass" scoped>
.downloads-section
  margin-top: 1.5em

.downloads-label
  &:hover
    color: unset !important
    cursor: default
</style>
