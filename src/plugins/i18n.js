import {
  createI18n
} from 'vue-i18n'
import en from '*/locales/en.json'
import ru from '*/locales/ru.json'

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
