<template>
  <nav>
    <router-link v-for="(el, index) in root.items" :key="index" tag="a" :class="root.class" :active-class="root.activeClass" :to="el.route">
      {{ el.content }}
    </router-link>
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
