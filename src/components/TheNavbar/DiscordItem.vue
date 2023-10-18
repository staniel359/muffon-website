<template>
  <a
    class="icon item"
    :href="discordLink"
    target="_blank"
  >
    <i
      class="discord icon"
    />
  </a>
</template>

<script>
export default {
  name: 'DiscordItem',
  data () {
    return {
      discordLink:
        'https://discord.gg/kpWsA5NBmJ'
    }
  }
}
</script>

<style lang="sass" scoped></style>
