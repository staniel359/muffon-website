<template>
  <a
    v-if="isRender"
    class="item"
    :href="fileLink"
  >
    <div class="download-title">
      <i
        class="icon"
        :class="systemIcon"
      />

      {{ systemName }}
    </div>

    <small class="download-file-name-size">
      {{ fileName }}

      {{ fileSizeFormatted }}
    </small>
  </a>
</template>

<script>
export default {
  name: 'SystemItem',
  props: {
    systemData: {
      type: Object,
      required: true
    },
    systemCode: {
      type: String,
      required: true
    },
    fileData: {
      type: Object,
      required: true
    }
  },
  computed: {
    isRender () {
      return (
        this.systemData.code !==
          this.systemCode
      )
    },
    fileLink () {
      return this.fileData.link
    },
    systemIcon () {
      return this.systemData.icon
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
  }
}
</script>

<style lang="sass" scoped></style>
