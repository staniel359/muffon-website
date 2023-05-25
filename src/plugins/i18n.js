import {
  createI18n
} from 'vue-i18n'
import en from '@/data/locales/en.json'

const messages = {
  en
}

export default createI18n(
  {
    locale: 'en',
    messages
  }
)
