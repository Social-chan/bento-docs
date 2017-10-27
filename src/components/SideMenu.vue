<template>
  <nav :class="root.navClass">
    <li v-for="(el, index) in root.items" :key="index">
      <router-link v-if="_.has(el, 'route')" tag="a" :class="root.class" :active-class="root.activeClass" :to="el.route">
        {{ el.content }}
      </router-link>
      <span v-else :class="root.headerClass">
        <strong>{{ el.content }}</strong>
      </span>
    </li>
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
