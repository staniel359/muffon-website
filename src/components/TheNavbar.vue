<template>
  <div class="ui top attached borderless inverted menu the-navbar">
    <div class="ui container">
      <LogoNameItem />

      <div class="right menu">
        <GithubItem />

        <LanguageItem />
      </div>
    </div>
  </div>
</template>

<script>
import LogoNameItem from './TheNavbar/LogoNameItem.vue'
import GithubItem from './TheNavbar/GithubItem.vue'
import LanguageItem from './TheNavbar/LanguageItem.vue'

export default {
  name: 'TheNavbar',
  components: {
    LogoNameItem,
    GithubItem,
    LanguageItem
  }
}
</script>

<style lang="sass" scoped>
.the-navbar
  border-bottom: 1px solid grey !important
</style>
