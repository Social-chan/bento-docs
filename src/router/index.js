import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Components from '@/pages/Components'
import Layout from '@/pages/Layout'
import Customize from '@/pages/Customize'

// Layouts pages
import Grids from '@/pages/layout/Grids.vue'

// Components pages
import Playground from '@/pages/components/Playground.vue'
import Tables from '@/pages/components/Tables.vue'
import Buttons from '@/pages/components/Buttons.vue'
import Forms from '@/pages/components/Forms.vue'
import Panels from '@/pages/components/Panels.vue'
import Progress from '@/pages/components/Progress.vue'
import Tooltips from '@/pages/components/Tooltips.vue'
import Badges from '@/pages/components/Badges.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/getting-started'
    },
    {
      path: '/getting-started',
      name: 'h',
      component: Home
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'l',
          component: Grids
        }
      ]
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
          path: 'tables',
          name: 'c.tables',
          component: Tables
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
        },
        {
          path: 'badges',
          name: 'c.badges',
          component: Badges
        }
      ]
    },
    {
      path: '/customize',
      name: 'b',
      component: Customize
    }
  ]
})
