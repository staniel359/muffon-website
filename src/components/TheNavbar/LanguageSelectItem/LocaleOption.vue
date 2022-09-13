<template>
  <option
    :value="code"
    :selected="isSelected"
    v-text="name"
  />
</template>

<script>
export default {
  name: 'LocaleOption',
  props: {
    localeData: {
      type: Object,
      required: true
    }
  },
  computed: {
    code () {
      return this.localeData.code
    },
    isSelected () {
      return !!this.localeData.isMain
    },
    name () {
      return this.localeData.name
    }
  }
}
</script>

<style lang="sass" scoped></style>
