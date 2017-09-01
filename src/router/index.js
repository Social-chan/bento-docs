import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Components from '@/pages/Components'
import Mixes from '@/pages/Mixes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/mixes',
      name: 'mixes',
      component: Mixes
    }
  ],
  linkActiveClass: '',
  linkExactActiveClass: 'active'
})
