<template>
  <section>
    <h3>
      Playground
      <span class="omusubi bg-green text-white pbt-1 plr-2">new!</span>
    </h3>
    <p class="text-light text-2 mb-3">
      Try the framework here, copy some code from components examples, paste it here and... ¡voilá!
    </p>

    <div class="flow">
      <div class="col-12 col-md-6 pr-md-2">
        <textarea v-model="playground" style="width: 100%;resize: vertical" rows="8" placeholder="Play with me! Try some code"></textarea>
      </div>
      <div class="col-12 col-md-6 pl-md-2" v-html="playground"></div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      playground: null
    }
  }
}
</script>
