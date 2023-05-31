<template>
  <a
    class="icon item"
    :href="donateLink"
    target="_blank"
  >
    <i
      class="kofi icon"
    />
  </a>
</template>

<script>
export default {
  name: 'DonateItem',
  data () {
    return {
      donateLink:
        'https://ko-fi.com/staniel359'
    }
  }
}
</script>

<style lang="sass" scoped></style>
