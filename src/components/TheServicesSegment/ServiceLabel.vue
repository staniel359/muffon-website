<template>
  <div
    ref="label"
    class="ui circular icon label service-label"
    :data-content="serviceData.name"
  >
    <i
      class="icon"
      :class="serviceData.code"
    />
  </div>
</template>

<script>
export default {
  name: 'ServiceLabel',
  props: {
    serviceData: {
      type: Object,
      required: true
    }
  },
  computed: {
    popupOptions () {
      return {
        position: 'top center'
      }
    }
  },
  mounted () {
    $(
      this.$refs.label
    ).popup(
      this.popupOptions
    )
  }
}
</script>

<style lang="sass" scoped>
.service-label
  background: white !important
</style>
