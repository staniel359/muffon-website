<template>
  <div
    ref="label"
    class="ui circular icon label service-label"
  >
    <i
      class="icon"
      :class="serviceCode"
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
        position: 'top center',
        transition: 'fade up',
        variation: 'basic',
        html: this.serviceNameStrong
      }
    },
    serviceNameStrong () {
      return `<strong>${this.serviceName}</strong>`
    },
    serviceName () {
      return this.serviceData.name
    },
    serviceCode () {
      return this.serviceData.code
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
