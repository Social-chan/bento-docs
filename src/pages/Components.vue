<template>
  <div>
    <nav class="has-shadow mb-4" style="list-style: none">
      <div class="container">
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c' }">
          <a>Playground</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.grids' }">
          <a>Grids</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.tables' }">
          <a>Tables</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.buttons' }">
          <a>Buttons</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.inputs' }">
          <a>Inputs</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.panels' }">
          <a>Panels</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.tooltips' }">
          <a>Tooltips</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.progress' }">
          <a>Progress</a>
        </router-link>
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'c.badges' }">
          <a>Badges</a>
        </router-link>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
