<template>
  <Transition
    name="fade"
    mode="out-in"
  >
    <Component
      :is="component"
    />
  </Transition>
</template>

<script>
import BasicSection from './FeaturesSection/BasicSection.vue'
import PersonalSection from './FeaturesSection/PersonalSection.vue'
import SocialSection from './FeaturesSection/SocialSection.vue'

export default {
  name: 'FeaturesSection',
  components: {
    BasicSection,
    PersonalSection,
    SocialSection
  },
  props: {
    categories: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  computed: {
    component () {
      return this.categoryData.component
    },
    categoryData () {
      return this.categories.find(
        this.isMatchedCategory
      )
    }
  },
  methods: {
    isMatchedCategory (
      categoryData
    ) {
      return (
        categoryData.code ===
          this.selected
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.2s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
</style>
