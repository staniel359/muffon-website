<template>
  <div class="footer-link">
    <h4 class="ui header main-header">
      <a
        class="main-link"
        target="_blank"
        :href="donateLink"
        v-text="donateText"
      />
    </h4>
  </div>
</template>

<script>
export default {
  name: 'DonateBlock',
  data () {
    return {
      donateLink:
        'https://ko-fi.com/staniel359'
    }
  },
  computed: {
    donateText () {
      return this.$t(
        'donate'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
