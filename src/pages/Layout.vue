<template>
  <div>
    <nav class="has-shadow mb-4" style="list-style: none">
      <div class="container">
        <router-link tag="li" class="d-inline-block p-3" :to="{ name: 'l.grids' }">
          <a>Grids</a>
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
