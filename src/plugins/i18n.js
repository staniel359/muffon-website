import {
  createI18n
} from 'vue-i18n'
import en from '*/helpers/data/plugins/i18n/locales/en.json'
import ru from '*/helpers/data/plugins/i18n/locales/ru.json'

const messages = {
  en,
  ru
}

export default createI18n(
  {
    locale: 'en',
    messages
  }
)
