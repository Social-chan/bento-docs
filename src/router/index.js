import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Components from '@/pages/Components'
import Examples from '@/pages/Examples'

// Components pages
import Playground from '@/pages/components/Playground.vue'
import Grids from '@/pages/components/Grids.vue'
import Buttons from '@/pages/components/Buttons.vue'
import Forms from '@/pages/components/Forms.vue'
import Panels from '@/pages/components/Panels.vue'
import Progress from '@/pages/components/Progress.vue'
import Tooltips from '@/pages/components/Tooltips.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'h',
      component: Home
    },
    {
      path: '/components',
      component: Components,
      children: [
        {
          path: '',
          name: 'c',
          component: Playground
        },
        {
          path: 'grids',
          name: 'c.grids',
          component: Grids
        },
        {
          path: 'buttons',
          name: 'c.buttons',
          component: Buttons
        },
        {
          path: 'forms',
          name: 'c.forms',
          component: Forms
        },
        {
          path: 'panels',
          name: 'c.panels',
          component: Panels
        },
        {
          path: 'tooltips',
          name: 'c.tooltips',
          component: Tooltips
        },
        {
          path: 'progress',
          name: 'c.progress',
          component: Progress
        }
      ]
    },
    {
      path: '/examples',
      name: 'e',
      component: Examples
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
