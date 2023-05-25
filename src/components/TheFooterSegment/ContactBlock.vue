<template>
  <div class="footer-link">
    <h4 class="ui inverted header main-header">
      <a
        class="main-link"
        target="_blank"
        :href="contactLink"
        v-text="contactText"
      />
    </h4>
  </div>
</template>

<script>
import info from '@/../package.json'

export default {
  name: 'ContactBlock',
  computed: {
    contactLink () {
      return info.author.url
    },
    contactText () {
      return this.$t(
        'footer.contact'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
