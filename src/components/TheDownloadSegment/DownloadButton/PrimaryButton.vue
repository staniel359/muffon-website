<template>
  <a
    class="ui button"
    :href="fileLink"
  >
    <div class="download-title">
      <i
        class="icon"
        :class="systemIcon"
      />

      {{ downloadText }}
    </div>

    <small class="download-file-name-size">
      {{ fileName }}

      {{ fileSizeFormatted }}
    </small>
  </a>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    fileData: {
      type: Object,
      required: true
    },
    systems: {
      type: Array,
      required: true
    },
    systemCode: {
      type: String,
      required: true
    }
  },
  computed: {
    fileLink () {
      return this.fileData.link
    },
    systemIcon () {
      return this.systemData.icon
    },
    systemData () {
      return this.systems.find(
        this.isMatchedSystem
      )
    },
    downloadText () {
      return this.$t(
        'download',
        {
          systemName: this.systemName
        }
      )
    },
    systemName () {
      return this.systemData.name
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
    }
  },
  methods: {
    isMatchedSystem (
      systemData
    ) {
      return (
        systemData.code ===
          this.systemCode
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
