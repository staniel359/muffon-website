<template>
  <a
    :href="fileLink"
  >
    <div class="download-title">
      <i
        class="icon"
        :class="fileSystemIcon"
      />

      {{ textFormatted }}

      {{ fileExtensionFormatted }}

      <template
        v-if="isPortable"
      >
        (Portable)
      </template>
    </div>

    <small class="download-file-name-size">
      {{ fileName }}

      {{ fileSizeFormatted }}
    </small>
  </a>
</template>

<script>
import systems from '@/data/systems'

export default {
  name: 'BaseDownloadItem',
  props: {
    fileData: {
      type: Object,
      required: true
    },
    isPrimary: Boolean
  },
  computed: {
    fileLink () {
      return this.fileData.link
    },
    fileSystemIcon () {
      return this.fileSystemData.icon
    },
    fileSystemData () {
      return systems.find(
        this.isMatchedSystem
      )
    },
    fileSystemCode () {
      return this.fileData.systemCode
    },
    textFormatted () {
      if (this.isPrimary) {
        return this.downloadText
      } else {
        return this.fileSystemName
      }
    },
    downloadText () {
      return this.$t(
        'download',
        {
          systemName: this.fileSystemName
        }
      )
    },
    fileSystemName () {
      return this.fileSystemData.name
    },
    fileExtensionFormatted () {
      return `(.${this.fileExtension})`
    },
    fileExtension () {
      return this.fileData.extension
    },
    fileName () {
      return this.fileData.name
    },
    fileSizeFormatted () {
      return this.$t(
        'fileSize',
        {
          size: this.fileSize
        }
      )
    },
    fileSize () {
      return this.fileData.size
    },
    isPortable () {
      return this.fileData.isPortable
    }
  },
  methods: {
    isMatchedSystem (
      systemData
    ) {
      return (
        systemData.code ===
          this.fileSystemCode
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.download-title
  margin-bottom: 0.25em

.download-file-name-size
  font-weight: 100
</style>
