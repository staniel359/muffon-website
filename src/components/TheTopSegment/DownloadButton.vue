<template>
  <div v-if="files">
    <ButtonsBlock
      v-if="fileData"
      :file-data="fileData"
      :files="files"
    />
    <div
      v-else
      v-text="notSupportedText"
    />

    <DownloadsSection
      :releases="releases"
    />
  </div>
  <div
    v-else
    class="ui active inline loader"
  />
</template>

<script>
import axios from 'axios'
import ButtonsBlock from './DownloadButton/ButtonsBlock.vue'
import DownloadsSection from './DownloadButton/DownloadsSection.vue'

export default {
  name: 'DownloadButton',
  components: {
    ButtonsBlock,
    DownloadsSection
  },
  data () {
    return {
      releases: null,
      files: null,
      releasesLink:
        'https://api.github.com/repos/staniel359/muffon/releases',
      defaultExtensionsData: {
        win: 'exe',
        mac: 'pkg',
        linux: 'deb'
      }
    }
  },
  computed: {
    fileData () {
      return this.files.find(
        this.isPrimaryFile
      )
    },
    systemDefaultExtension () {
      return this.defaultExtensionsData[
        this.systemCode
      ]
    },
    systemCode () {
      return this.platform.match(
        /Win|Mac|Linux/
      )?.[0]?.toLowerCase()
    },
    platform () {
      return (
        navigator.userAgentData?.platform ||
          navigator.platform
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
      axios.get(
        this.releasesLink
      ).then(
        this.handleSuccess
      ).catch(
        this.handleError
      )
    },
    handleSuccess (
      response
    ) {
      this.releases = response.data

      const files = this.releases[0].assets

      this.files = files.map(
        this.formatFileData
      )
    },
    formatFileData (
      fileData
    ) {
      const {
        name
      } = fileData

      const systemCode =
        name.match(
          /win|mac|linux/
        )[0]

      const extension =
        name.split(
          '.'
        ).at(
          -1
        )

      const size =
        this.formatSize(
          fileData.size
        )

      const link =
        fileData.browser_download_url

      const downloadsCount =
        fileData.download_count

      const isPortable =
        !!name.match(
          'portable'
        )

      const isPrimary = (
        systemCode ===
          this.systemCode
      ) && (
        extension ===
          this.systemDefaultExtension
      ) && (
        !isPortable
      )

      return {
        name,
        systemCode,
        extension,
        size,
        link,
        downloadsCount,
        isPrimary,
        isPortable
      }
    },
    formatSize (
      size
    ) {
      return Math.floor(
        size / (
          1024 * 1024
        )
      )
    },
    handleError () {
      this.retryGetLatestReleaseData()
    },
    retryGetLatestReleaseData () {
      setTimeout(
        this.getLatestReleaseData,
        1000
      )
    },
    isPrimaryFile (
      fileData
    ) {
      return !!fileData.isPrimary
    }
  }
}
</script>

<style lang="sass" scoped></style>
