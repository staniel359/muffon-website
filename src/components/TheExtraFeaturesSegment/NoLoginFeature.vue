<template>
  <div class="column extra-feature-item">
    <h2 class="ui header main-header">
      <i class="icons">
        <i class="large red dont icon" />

        <i class="small user icon" />
      </i>

      <div
        class="content"
        v-text="noLoginText"
      />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NoLoginFeature',
  computed: {
    noLoginText () {
      return this.$t(
        'features.extra.noLogin'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
