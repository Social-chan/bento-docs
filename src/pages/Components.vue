<template>
  <div>
    <sub-menu :root="submenu"></sub-menu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      submenu: {
        navClass: 'has-shadow mb-4',
        class: 'd-inline-block p-3',
        activeClass: 'tw-semibold',
        items: [
          {
            content: 'Playground',
            route: { name: 'c' }
          },
          {
            content: 'Grids',
            route: { name: 'c.grids' }
          },
          {
            content: 'Tables',
            route: { name: 'c.tables' }
          },
          {
            content: 'Buttons',
            route: { name: 'c.buttons' }
          },
          {
            content: 'Inputs',
            route: { name: 'c.inputs' }
          },
          {
            content: 'Panels',
            route: { name: 'c.panels' }
          },
          {
            content: 'Progress',
            route: { name: 'c.progress' }
          },
          {
            content: 'Badges',
            route: { name: 'c.badges' }
          }
        ]
      }
    }
  }
}
</script>
