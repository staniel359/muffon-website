<template>
  <div
    ref="button"
    class="ui floating dropdown icon button extra-button"
  >
    <i class="dropdown icon" />

    <div class="menu">
      <template
        v-for="(fileData, index) in files"
        :key="index"
      >
        <BaseDownloadItem
          v-if="!fileData.isPrimary"
          class="item"
          :file-data="fileData"
        />
      </template>
    </div>
  </div>
</template>

<script>
import BaseDownloadItem from '@/components/shared/BaseDownloadItem.vue'

export default {
  name: 'ExtraButton',
  components: {
    BaseDownloadItem
  },
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  computed: {
    dropdownOptions () {
      return {
        on: 'hover',
        transition: 'fade up',
        delay: {
          show: 0,
          hide: 150
        }
      }
    }
  },
  mounted () {
    $(
      this.$refs.button
    ).dropdown(
      this.dropdownOptions
    )
  }
}
</script>

<style lang="sass" scoped>
.extra-button
  display: flex !important
  align-items: center
</style>
