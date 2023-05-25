<template>
  <div class="ui primary large buttons">
    <BaseDownloadItem
      class="ui button"
      :file-data="fileData"
      is-primary
    />

    <ExtraButton
      :files="files"
    />
  </div>
</template>

<script>
import BaseDownloadItem from '@/components/shared/BaseDownloadItem.vue'
import ExtraButton from './ButtonsBlock/ExtraButton.vue'

export default {
  name: 'ButtonsBlock',
  components: {
    BaseDownloadItem,
    ExtraButton
  },
  props: {
    fileData: Object,
    files: Array
  }
}
</script>

<style lang="sass" scoped></style>
