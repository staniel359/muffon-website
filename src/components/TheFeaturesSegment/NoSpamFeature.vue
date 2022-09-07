<template>
  <div class="no-feature">
    <h2 class="ui inverted header main-header">
      <i class="icons">
        <i
          class="large red dont icon"
        />

        <i
          class="small envelope icon"
        />
      </i>

      <div class="content">
        {{ noSpamText }}
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NoSpamFeature',
  computed: {
    noSpamText () {
      return this.$t(
        'features.noSpam'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
