<template>
  <div class="item">
    <div class="logo-container">
      <img
        class="ui image"
        :src="logo"
      >
    </div>

    <div class="name-container">
      <h1
        class="ui inverted header"
        v-text="appName"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoNameItem',
  data () {
    return {
      appName: 'muffon'
    }
  },
  computed: {
    logo () {
      return require(
        '*/assets/images/logo.png'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.logo-container
  width: 50px

.name-container
  margin-left: 1em
</style>
