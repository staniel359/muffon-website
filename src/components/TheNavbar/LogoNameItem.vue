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
import logo from '@/assets/images/logo.png'

export default {
  name: 'LogoNameItem',
  data () {
    return {
      appName: 'muffon'
    }
  },
  computed: {
    logo () {
      return logo
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
