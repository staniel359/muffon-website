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
        class="ui header main-header"
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
  margin-left: 0.9em
  .main-header
    font-family: 'Nunito'
    font-weight: 500
    font-size: 2.3em
    margin-bottom: 0.15em !important
</style>
