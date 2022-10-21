import {
  createApp
} from 'vue'
import App from './App.vue'
import i18n from '*/plugins/i18n'
import '../semantic/dist/semantic.min.js'
import '../semantic/dist/semantic.min.css'
import '*/assets/styles/Main.sass'
import '*/assets/styles/Sources.sass'

createApp(
  App
).use(
  i18n
).mount(
  '#app'
)
