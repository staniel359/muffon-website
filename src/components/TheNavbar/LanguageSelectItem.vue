<template>
  <div class="item">
    <select
      ref="dropdown"
      class="ui inverted dropdown language-select"
    >
      <LocaleOption
        v-for="localeData in locales"
        :key="localeData.code"
        :locale-data="localeData"
      />
    </select>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
import LocaleOption from './LanguageSelectItem/LocaleOption.vue'
import locales from '@/data/locales'

export default {
  name: 'LanguageSelectItem',
  components: {
    LocaleOption
  },
  computed: {
    locales () {
      return locales
    },
    dropdownOptions () {
      return {
        on: 'hover',
        delay: {
          show: 0,
          hide: 150
        },
        onChange:
          this.handleLocaleChange
      }
    }
  },
  mounted () {
    $(
      this.$refs.dropdown
    ).dropdown(
      this.dropdownOptions
    )
  },
  methods: {
    handleLocaleChange (
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
