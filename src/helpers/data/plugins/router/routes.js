const HomePage = () => import(
  '*/views/HomePage.vue'
)

export default [
  {
    path: '/',
    exact: true,
    name: 'HomePage',
    component: HomePage
  }
]
