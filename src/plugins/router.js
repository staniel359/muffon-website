import {
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from '*/helpers/data/plugins/router/routes'

export default createRouter(
  {
    history: createWebHistory(),
    routes
  }
)
