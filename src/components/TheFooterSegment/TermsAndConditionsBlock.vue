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
      <div class="scrolling content">
        <div
          class="ui basic segment"
          :class="{
            loading: isLoading
          }"
          v-html="termsAndConditionsText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TermsAndConditionsBlock',
  data () {
    return {
      isLoading: true,
      termsAndConditionsText: null
    }
  },
  computed: {
    termsAndConditionsHeaderText () {
      return this.$t(
        'footer.termsAndConditions'
      )
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

      if (!this.termsAndConditionsText) {
        axios.get(
          'https://178-79-138-81.ip.linodeusercontent.com/api/legal/terms_and_conditions'
        ).then(
          this.handleSuccess
        )
      }
    },
    handleSuccess (
      response
    ) {
      this.termsAndConditionsText =
        response.data.legal.terms_and_conditions

      this.isLoading = false
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
