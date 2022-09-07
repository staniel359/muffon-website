<template>
  <h2 class="ui inverted header main-header">
    <i
      class="windows icon"
    />

    <i
      class="apple icon"
    />

    <i
      class="linux icon"
    />

    <div class="content">
      {{ crossPlatformText }}
    </div>
  </h2>
</template>

<script>
export default {
  name: 'CrossPlatformFeature',
  computed: {
    crossPlatformText () {
      return this.$t(
        'features.crossPlatform'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
