import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import {canNavigate} from '@/libs/acl/routeProtection'
import {isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser} from '@/auth/utils'

import dashboard from './routes/dashboard'
import my from './routes/my'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  routes: [
    {path: '/', redirect: {name: 'dashboard-ecommerce'}},
    ...my,
    ...dashboard,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({name: 'auth-login'})

    // If logged in => not authorized
    return next()
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    // next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
    next(getHomeRouteForLoggedInUser('/'))
  }

  return next()
})

export default router
