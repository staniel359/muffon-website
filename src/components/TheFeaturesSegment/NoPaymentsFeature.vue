<template>
  <div class="no-feature">
    <h2 class="ui inverted header main-header">
      <i class="icons">
        <i
          class="large red dont icon"
        />

        <i
          class="small dollar sign icon"
        />
      </i>

      <div class="content">
        {{ noPaymentsText }}
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NoPaymentsFeature',
  computed: {
    noPaymentsText () {
      return this.$t(
        'features.noPayments'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
