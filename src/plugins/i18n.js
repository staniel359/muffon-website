import {
  createI18n
} from 'vue-i18n'
import languages from '*/data/languages'

function formatLanguage (
  {
    code
  }
) {
  const translations =
    require(
      `*/data/locales/${code}.json`
    )

  return [
    code,
    translations
  ]
}

const languagesFormatted =
  languages.map(
    formatLanguage
  )

const messages =
  Object.fromEntries(
    languagesFormatted
  )

export default createI18n(
  {
    locale: 'en',
    messages
  }
)
