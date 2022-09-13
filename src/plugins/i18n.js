import {
  createI18n
} from 'vue-i18n'
import locales from '*/data/locales'

function formatLocale (
  {
    code
  }
) {
  const locale =
    require(
      `*/data/locales/${code}.json`
    )

  return [
    code,
    locale
  ]
}

const localesFormatted =
  locales.map(
    formatLocale
  )

const messages =
  Object.fromEntries(
    localesFormatted
  )

export default createI18n(
  {
    locale: 'en',
    messages
  }
)
