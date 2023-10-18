<template>
  <div class="ui top fixed borderless menu">
    <div class="ui container main-container navbar-container">
      <LogoNameItem />

      <div class="right menu">
        <GithubItem />

        <DiscordItem />

        <DonateItem />
      </div>
    </div>
  </div>
</template>

<script>
import LogoNameItem from './TheNavbar/LogoNameItem.vue'
import GithubItem from './TheNavbar/GithubItem.vue'
import DiscordItem from './TheNavbar/DiscordItem.vue'
import DonateItem from './TheNavbar/DonateItem.vue'

export default {
  name: 'TheNavbar',
  components: {
    LogoNameItem,
    GithubItem,
    DiscordItem,
    DonateItem
  }
}
</script>

<style lang="sass" scoped>
.navbar-container
  padding-top: 0 !important
  padding-bottom: 0 !important
</style>
