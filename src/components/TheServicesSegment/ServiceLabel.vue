<template>
  <div
    ref="label"
    class="ui circular icon inverted label service-label"
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
      const className = 'ui popup main-popup'

      return {
        position: 'top center',
        transition: 'fade up',
        variation: 'basic inverted',
        html: this.serviceNameStrong,
        className: {
          popup: className
        }
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
  &:not(.inverted)
    background: white !important
  &.inverted
    background: $colorBlack !important
    border: $borderInverted
</style>
