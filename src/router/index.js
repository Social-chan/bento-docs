import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Components from '@/pages/Components'
import Reference from '@/pages/Reference'
import Customize from '@/pages/Customize'

// Reference pages
import RefIntro from '@/pages/reference/Intro.vue'
import RefVars from '@/pages/reference/SCSS.vue'
import RefExtend from '@/pages/reference/Extend.vue'
import RefBreakpts from '@/pages/reference/Breakpoints.vue'
import RefGrids from '@/pages/reference/Grids.vue'
import RefColors from '@/pages/reference/utilities/Colors.vue'

// Components pages
import Playground from '@/pages/components/Playground.vue'
import Grids from '@/pages/components/Grids.vue'
import Tables from '@/pages/components/Tables.vue'
import Buttons from '@/pages/components/Buttons.vue'
import Inputs from '@/pages/components/Inputs.vue'
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
          path: 'vars',
          name: 'ref.vars',
          component: RefVars
        },
        {
          path: 'extend',
          name: 'ref.extend',
          component: RefExtend
        },
        {
          path: 'breakpoints',
          name: 'ref.breakpts',
          component: RefBreakpts
        },
        {
          path: 'grids',
          name: 'ref.grids',
          component: RefGrids
        },
        {
          path: 'colors',
          name: 'ref.colors',
          component: RefColors
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
          path: 'grids',
          name: 'c.grids',
          component: Grids
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
          path: 'inputs',
          name: 'c.inputs',
          component: Inputs
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
