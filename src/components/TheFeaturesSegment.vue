<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container the-features-container">
      <HeaderSection />

      <CategoryButtonsSection
        :categories="categories"
        :selected="selected"
        @button-click="handleCategoryButtonClick"
      />

      <FeaturesSection
        :categories="categories"
        :selected="selected"
      />
    </div>
  </div>
</template>

<script>
import HeaderSection from './TheFeaturesSegment/HeaderSection.vue'
import CategoryButtonsSection
  from './TheFeaturesSegment/CategoryButtonsSection.vue'
import FeaturesSection from './TheFeaturesSegment/FeaturesSection.vue'

export default {
  name: 'TheFeaturesSegment',
  components: {
    HeaderSection,
    CategoryButtonsSection,
    FeaturesSection
  },
  data () {
    return {
      selected: 'basic',
      categories: [
        {
          code: 'basic',
          component: 'BasicSection'
        },
        {
          code: 'personal',
          component: 'PersonalSection'
        },
        {
          code: 'social',
          component: 'SocialSection'
        }
      ]
    }
  },
  methods: {
    handleCategoryButtonClick (
      value
    ) {
      this.selected = value
    }
  }
}
</script>

<style lang="sass" scoped>
.the-features-container
  display: flex !important
  flex-direction: column
  align-items: center
</style>
