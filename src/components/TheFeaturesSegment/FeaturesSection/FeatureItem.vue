<template>
  <div class="column">
    <h3 class="ui icon inverted header">
      <i
        class="large icon"
        :class="icon"
      />

      <div class="content">
        {{ headerText }}

        <div
          class="sub header"
          v-text="subheaderText"
        />
      </div>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'FeatureItem',
  props: {
    featureData: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    icon () {
      return this.featureData.icon
    },
    headerText () {
      return this.$t(
        `features.${this.category}.${this.code}.header`
      )
    },
    code () {
      return this.featureData.code
    },
    subheaderText () {
      return this.$t(
        `features.${this.category}.${this.code}.subheader`
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
