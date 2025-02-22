<template>
  <div class="copyright-section">
    <small
      v-text="copyrightText"
    />
  </div>
</template>

<script>
export default {
  name: 'CopyrightSection',
  data () {
    return {
      copyrightText:
        'Copyright © 2020-2025 Aleksey Shpakovsky'
    }
  }
}
</script>

<style lang="sass" scoped>
.copyright-section
  margin-top: 0.25em
</style>
