<template>
  <div
    ref="button"
    class="ui floating dropdown icon button extra-button"
  >
    <i class="dropdown icon" />

    <div class="menu">
      <SystemItem
        v-for="systemData in systems"
        :key="systemData.code"
        :system-data="systemData"
        :system-code="systemCode"
        :file-data="filesData[systemData.code]"
      />
    </div>
  </div>
</template>

<script>
import SystemItem from './ExtraButton/SystemItem.vue'

export default {
  name: 'ExtraButton',
  components: {
    SystemItem
  },
  props: {
    filesData: {
      type: Object,
      required: true
    },
    systems: {
      type: Array,
      required: true
    },
    systemCode: String
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
