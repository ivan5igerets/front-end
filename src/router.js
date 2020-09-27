import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)
 
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'main', requiresAuth: true},
      component: Home
    },
    {
      path: '/personal_area',
      name: 'personal_area',
      meta: {layout: 'main', requiresAuth: true},
      component: () => import('./views/PersonalArea.vue')
    },
    {
      path: '/edit_profile',
      name: 'edit_profile',
      meta: {layout: 'main', requiresAuth: true},
      component: () => import('./views/EditProfile.vue')
    },
    {
      path: '/add_new_bulletian',
      name: 'add_new_bulletian',
      meta: {layout: 'main', requiresAuth: true},
      component: () => import('./views/AddNewBulletian.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      meta: {layout: 'empty'},
      component: () => import('./views/Signin.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // if (localStorage.email === null) {
  //   next('/login')
  // } else {
  //   next()
  // }

  console.log(123456789);
  console.log(to, from)
  next()
})

export default router
