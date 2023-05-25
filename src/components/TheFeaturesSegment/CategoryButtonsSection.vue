<template>
  <div class="category-buttons-section">
    <CategoryButton
      v-for="categoryData in categories"
      :key="categoryData.code"
      :category-code="categoryData.code"
      :selected="selected"
      @click="handleButtonClick"
    />
  </div>
</template>

<script>
import CategoryButton from './CategoryButtonsSection/CategoryButton.vue'

export default {
  name: 'CategoryButtonsSection',
  components: {
    CategoryButton
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
  emits: [
    'buttonClick'
  ],
  methods: {
    handleButtonClick (
      value
    ) {
      this.$emit(
        'buttonClick',
        value
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.category-buttons-section
  margin-bottom: 2em
</style>
