<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container footer-container">
      <div class="footer-links-container">
        <PrivacyPolicyBlock />

        <TermsAndConditionsBlock />

        <ContactBlock />

        <DonateBlock />
      </div>

      <CopyrightSection />
    </div>
  </div>
</template>

<script>
import PrivacyPolicyBlock from './TheFooterSegment/PrivacyPolicyBlock.vue'
import TermsAndConditionsBlock
  from './TheFooterSegment/TermsAndConditionsBlock.vue'
import ContactBlock from './TheFooterSegment/ContactBlock.vue'
import DonateBlock from './TheFooterSegment/DonateBlock.vue'
import CopyrightSection from './TheFooterSegment/CopyrightSection.vue'

export default {
  name: 'TheFooterSegment',
  components: {
    PrivacyPolicyBlock,
    TermsAndConditionsBlock,
    ContactBlock,
    DonateBlock,
    CopyrightSection
  }
}
</script>

<style lang="sass" scoped>
.footer-container
  display: flex !important
  flex-direction: column
  align-items: center

.footer-links-container
  display: flex

::v-deep(.footer-link)
  &:not(:first-child)
    margin-left: 1em
</style>
