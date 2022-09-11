<template>
  <div
    class="footer-link main-link"
    @click="handleClick"
  >
    <h4
      class="ui inverted header main-header"
      v-text="privacyPolicyHeaderText"
    />

    <div
      ref="modal"
      class="ui tiny page modal"
    >
      <div
        class="scrolling content"
        v-html="privacyPolicyText"
      />
    </div>
  </div>
</template>

<script>
import privacyPolicyText from '*/data/text/privacyPolicy.txt'

export default {
  name: 'PrivacyPolicyBlock',
  computed: {
    privacyPolicyHeaderText () {
      return this.$t(
        'footer.privacyPolicy'
      )
    },
    privacyPolicyText () {
      return privacyPolicyText
    },
    modalOptions () {
      return {
        duration: 300
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
