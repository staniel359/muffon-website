<template>
  <div
    class="footer-link main-link"
    @click="handleClick"
  >
    <h4
      class="ui header main-header"
      v-text="privacyPolicyHeaderText"
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
          v-html="privacyPolicyText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PrivacyPolicyBlock',
  data () {
    return {
      isLoading: true,
      privacyPolicyText: null
    }
  },
  computed: {
    privacyPolicyHeaderText () {
      return this.$t(
        'footer.privacyPolicy'
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

      if (!this.privacyPolicyText) {
        axios.get(
          'https://178-79-138-81.ip.linodeusercontent.com/api/legal/privacy_policy'
        ).then(
          this.handleSuccess
        )
      }
    },
    handleSuccess (
      response
    ) {
      this.privacyPolicyText =
        response.data.legal.privacy_policy

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
