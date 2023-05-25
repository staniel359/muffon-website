<template>
  <div class="feature-item">
    <h2 class="ui inverted header main-header">
      <i class="icons">
        <i class="large red dont icon" />

        <i class="small dollar sign icon" />
      </i>

      <div
        class="content"
        v-text="noPaymentsText"
      />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NoPaymentsFeature',
  computed: {
    noPaymentsText () {
      return this.$t(
        'features.extra.noPayments'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
