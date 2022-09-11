<template>
  <div class="item">
    <select
      ref="language"
      class="ui inverted dropdown language-select"
    >
      <option
        v-for="languageData in languages"
        :key="languageData.code"
        :value="languageData.code"
      >
        {{ languageData.name }}
      </option>
    </select>
  </div>
</template>

<script>
import i18n from '*/plugins/i18n'

export default {
  name: 'LanguageItem',
  data () {
    return {
      languages: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'it',
          name: 'Italiano'
        },
        {
          code: 'ru',
          name: 'Русский'
        }
      ]
    }
  },
  computed: {
    dropdownOptions () {
      return {
        on: 'hover',
        delay: {
          show: 0,
          hide: 150
        },
        onChange:
          this.handleLanguageChange
      }
    }
  },
  mounted () {
    $(
      this.$refs.language
    ).dropdown(
      this.dropdownOptions
    )
  },
  methods: {
    handleLanguageChange (
      value
    ) {
      i18n.global.locale = value
    }
  }
}
</script>

<style lang="sass" scoped>
::v-deep(.language-select)
  min-width: unset !important
</style>
