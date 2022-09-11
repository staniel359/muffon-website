import {
  createI18n
} from 'vue-i18n'
import en from '*/locales/en.json'
import it from '*/locales/it.json'
import ru from '*/locales/ru.json'

const messages = {
  en,
  it,
  ru
}

export default createI18n(
  {
    locale: 'en',
    messages
  }
)
