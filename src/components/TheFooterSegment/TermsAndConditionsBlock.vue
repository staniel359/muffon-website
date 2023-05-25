<template>
  <div
    class="footer-link main-link"
    @click="handleClick"
  >
    <h4
      class="ui header main-header"
      v-text="termsAndConditionsHeaderText"
    />

    <div
      ref="modal"
      class="ui tiny page modal"
    >
      <div
        class="scrolling content"
        v-html="termsAndConditionsText"
      />
    </div>
  </div>
</template>

<script>
import termsAndConditionsText from '@/data/text/termsAndConditions.txt?raw'

export default {
  name: 'TermsAndConditionsBlock',
  computed: {
    termsAndConditionsHeaderText () {
      return this.$t(
        'footer.termsAndConditions'
      )
    },
    termsAndConditionsText () {
      return termsAndConditionsText
    },
    modalOptions () {
      return {
        duration: 300,
        autofocus: false
      }
    }
  },
  mounted () {
    $(
      this.$refs.modal
    ).modal(
      this.modalOptions
    )
  },
  methods: {
    handleClick () {
      this.showModal()
    },
    showModal () {
      $(
        this.$refs.modal
      ).modal(
        'show'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
