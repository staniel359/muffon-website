<template>
  <div class="ui top fixed borderless inverted menu the-navbar">
    <div class="ui container">
      <LogoNameItem />

      <div class="right menu">
        <GithubItem />

        <LanguageSelectItem />
      </div>
    </div>
  </div>
</template>

<script>
import LogoNameItem from './TheNavbar/LogoNameItem.vue'
import GithubItem from './TheNavbar/GithubItem.vue'
import LanguageSelectItem from './TheNavbar/LanguageSelectItem.vue'

export default {
  name: 'TheNavbar',
  components: {
    LogoNameItem,
    GithubItem,
    LanguageSelectItem
  }
}
</script>

<style lang="sass" scoped>
.the-navbar
  border-bottom: 1px solid $colorGreyInverted !important
</style>
