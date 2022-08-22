import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import useAuthUser from 'src/composables/UseAuthUser'

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to) => {
    const { isLoggedIn } = useAuthUser()
    if (
      to.hash.includes('type=recovery') &&
      to.name !== 'reset-password'
    ) {
      const accessToken = to.hash.split('&')[0]
      const token = accessToken.replace('#access_token=', '')
      return { name: 'reset-password', query: { token } }
    }
    if (
      !isLoggedIn() &&
      to.meta.requiresAuth &&
      !Object.keys(to.query).includes('fromEmail')
    ) {
      return { name: 'login' }
    }
  })

  return Router
})
