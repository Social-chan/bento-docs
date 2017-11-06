<template>
  <nav :class="root.navClass">
    <div class="container">
      <router-link v-for="(el, index) in root.items" :key="index" tag="a" :class="root.class" :exact-active-class="root.activeClass" :to="el.route">
        {{ el.content }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    root: {
      type: Object,
      required: true
    }
  }
}
</script>
