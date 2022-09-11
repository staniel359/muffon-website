import {
  createI18n
} from 'vue-i18n'
import en from '*/locales/en.json'
import ru from '*/locales/ru.json'
import it from '*/locales/it.json'

const messages = {
  en,
  ru,
  it
}

export default createI18n(
  {
    locale: 'en',
    messages
  }
)
