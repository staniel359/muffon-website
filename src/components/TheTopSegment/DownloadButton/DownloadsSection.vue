<template>
  <div class="downloads-section">
    <h4
      class="ui inverted header"
      v-html="downloadsText"
    />
  </div>
</template>

<script>
export default {
  name: 'DownloadsSection',
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  computed: {
    downloadsText () {
      return this.$t(
        'downloads',
        {
          count: this.downloadsCount
        }
      )
    },
    downloadsCount () {
      return this.downloadsCounts.reduce(
        this.sum
      )
    },
    downloadsCounts () {
      return this.files.map(
        this.formatDownloadsCount
      )
    }
  },
  methods: {
    formatDownloadsCount (
      fileData
    ) {
      return fileData.downloadsCount
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
  margin-top: 2em
</style>
