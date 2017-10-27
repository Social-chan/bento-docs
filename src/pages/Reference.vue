<template>
  <div class="container mt-4">
    <h3>Reference</h3>
    <p class="t-2 mb-3">
      Learn and take advantage about Bento classes and SCSS variables. Deep learning.
    </p>

    <div class="flow mt-5">
      <div class="col-3">
        <side-menu :root="menu"></side-menu>
      </div>
      <div class="col-9">
        <div class="pl-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: {
        navClass: 'd-block bg-darkgray bs-rounded p-2',
        headerClass: 'd-block t-uppercase t-0 py-3 px-2 t-white',
        class: 'd-block is-hoverable t-1 py-3 px-1 t-white',
        items: [
          {
            content: 'Side menu'
          },
          {
            content: 'Introduction',
            route: { name: 'ref' }
          },
          {
            content: 'SCSS variables',
            route: { name: 'ref.vars' }
          },
          {
            content: 'Extend with JavaScript',
            route: { name: 'ref.extend' }
          },
          {
            content: 'Layout'
          },
          {
            content: 'Breakpoints',
            route: { name: 'ref.breakpoints' }
          },
          {
            content: 'Grids',
            route: { name: 'ref.grids' }
          },
          {
            content: 'Elements'
          },
          {
            content: 'Buttons',
            route: { name: 'ref.buttons' }
          },
          {
            content: 'Inputs',
            route: { name: 'ref.inputs' }
          },
          {
            content: 'Tables',
            route: { name: 'ref.tables' }
          },
          {
            content: 'Navs',
            route: { name: 'ref.navs' }
          },
          {
            content: 'Utilities'
          },
          {
            content: 'Colors',
            route: { name: 'ref.colors' }
          },
          {
            content: 'Text',
            route: { name: 'ref.text' }
          },
          {
            content: 'Borders',
            route: { name: 'ref.borders' }
          },
          {
            content: 'Shadows',
            route: { name: 'ref.shadows' }
          },
          {
            content: 'Positions',
            route: { name: 'ref.positions' }
          },
          {
            content: 'Spacings',
            route: { name: 'ref.spacings' }
          },
          {
            content: 'Sizing',
            route: { name: 'ref.sizing' }
          },
          {
            content: 'Display',
            route: { name: 'ref.display' }
          },
          {
            content: 'Flex',
            route: { name: 'ref.flex' }
          }
        ]
      }
    }
  }
}
</script>
