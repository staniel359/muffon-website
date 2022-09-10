<template>
  <div
    class="footer-link main-link"
    @click="handleClick"
  >
    <h4
      class="ui inverted header main-header"
      v-text="contactHeaderText"
    />

    <ContactModal
      ref="modal"
    />
  </div>
</template>

<script>
import ContactModal from './ContactBlock/ContactModal.vue'

export default {
  name: 'ContactBlock',
  components: {
    ContactModal
  },
  computed: {
    contactHeaderText () {
      return this.$t(
        'footer.contact'
      )
    }
  },
  methods: {
    handleClick () {
      this.showModal()
    },
    showModal () {
      this.$refs
        .modal
        .show()
    }
  }
}
</script>

<style lang="sass" scoped></style>
