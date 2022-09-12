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
        :selected="!!languageData.isMain"
        v-text="languageData.name"
      />
    </select>
  </div>
</template>

<script>
import i18n from '*/plugins/i18n'
import languages from '*/data/languages'

export default {
  name: 'LanguageItem',
  computed: {
    languages () {
      return languages
    },
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
