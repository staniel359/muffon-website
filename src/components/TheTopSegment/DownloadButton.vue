<template>
  <div v-if="filesData">
    <ButtonsBlock
      v-if="fileData"
      :files-data="filesData"
      :file-data="fileData"
      :system-code="systemCode"
    />
    <div
      v-else
      v-text="notSupportedText"
    />
  </div>
  <div
    v-else
    class="ui active inline loader"
  />
</template>

<script>
import ButtonsBlock from './DownloadButton/ButtonsBlock.vue'

export default {
  name: 'DownloadButton',
  components: {
    ButtonsBlock
  },
  data () {
    return {
      filesData: null,
      latestReleaseLink:
        'https://api.github.com/repos/staniel359/muffon/releases/latest'
    }
  },
  computed: {
    fileData () {
      return this.filesData[
        this.systemCode
      ]
    },
    systemCode () {
      if (this.isWindows) {
        return 'win'
      } else if (this.isMac) {
        return 'mac'
      } else if (this.isLinux) {
        return 'linux'
      } else {
        return null
      }
    },
    isWindows () {
      return this.platform.includes(
        'Win'
      )
    },
    platform () {
      return (
        navigator.userAgentData?.platform ||
          navigator.platform
      )
    },
    isMac () {
      return this.platform.includes(
        'Mac'
      )
    },
    isLinux () {
      return this.platform.includes(
        'Linux'
      )
    },
    notSupportedText () {
      return this.$t(
        'notSupported'
      )
    }
  },
  mounted () {
    this.getLatestReleaseData()
  },
  methods: {
    getLatestReleaseData () {
      fetch(
        this.latestReleaseLink
      ).then(
        this.formatResponse
      ).then(
        this.formatResponseData
      )
    },
    formatResponse (
      value
    ) {
      return value.json()
    },
    formatResponseData (
      value
    ) {
      const releases = value.assets

      const releasesFormatted =
        releases.map(
          this.formatReleaseData
        )

      const [
        win,
        mac,
        linux
      ] = releasesFormatted

      this.filesData = {
        win,
        mac,
        linux
      }
    },
    formatReleaseData (
      value
    ) {
      return {
        name: value.name,
        size: this.formatSize(
          value.size
        ),
        link:
          value.browser_download_url
      }
    },
    formatSize (
      value
    ) {
      return Math.floor(
        value / (
          1024 * 1024
        )
      )
    }
  }
}
</script>

<style lang="sass" scoped>
::v-deep(.download-title)
  margin-bottom: 0.25em

::v-deep(.download-file-name-size)
  font-weight: 100
</style>
