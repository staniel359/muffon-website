<template>
  <div
    class="ui primary circular massive button"
    @click="handleClick"
    v-text="downloadText"
  />
</template>

<script>
export default {
  name: 'DownloadButton',
  computed: {
    downloadText () {
      return this.$t(
        'downloadNow'
      )
    }
  },
  methods: {
    handleClick () {
      this.scrollToTop()
    },
    scrollToTop () {
      window.scrollTo(
        0,
        0
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
