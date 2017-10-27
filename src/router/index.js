import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Components from '@/pages/Components'
import Reference from '@/pages/Reference'
import Customize from '@/pages/Customize'

// Reference pages
import RefIntro from '@/pages/reference/Introduction.vue'
import RefGrids from '@/pages/reference/Grids.vue'

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
      path: '/reference',
      component: Reference,
      children: [
        {
          path: '',
          name: 'ref',
          component: RefIntro
        },
        {
          path: 'grids',
          name: 'ref.grids',
          component: RefGrids
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
