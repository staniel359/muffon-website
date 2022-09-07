<template>
  <div class="download-button-container">
    <div
      v-if="fileData"
      class="ui primary large buttons"
    >
      <PrimaryButton
        :file-data="fileData"
        :systems="systems"
        :system-code="systemCode"
      />

      <ExtraButton
        :files-data="filesData"
        :systems="systems"
        :system-code="systemCode"
      />
    </div>
    <div
      v-else
      v-text="notSupportedText"
    />
  </div>
</template>

<script>
import PrimaryButton from './DownloadButton/PrimaryButton.vue'
import ExtraButton from './DownloadButton/ExtraButton.vue'

export default {
  name: 'DownloadButton',
  components: {
    PrimaryButton,
    ExtraButton
  },
  data () {
    return {
      latestReleaseLink:
        'https://api.github.com/repos/staniel359/muffon/releases/latest',
      filesData: {},
      systems: [
        {
          code: 'win',
          name: 'Windows',
          icon: 'windows'
        },
        {
          code: 'mac',
          name: 'MacOS',
          icon: 'apple'
        },
        {
          code: 'linux',
          name: 'Linux',
          icon: 'linux'
        }
      ]
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
.download-button-container
  margin-top: 3em

::v-deep(.download-title)
  margin-bottom: 0.25em

::v-deep(.download-file-name-size)
  font-weight: 100
</style>
