<template>
  <section>
    <h3>
      Playground
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <p class="tw-light t-2 mb-3">
      Try the framework here, copy some code from components examples, paste it here and... ¡voilá!
    </p>

    <div class="flow">
      <div class="col-12 col-md-6 pr-md-2">
        <textarea v-model="playground" class="w-100" style="resize: vertical" rows="8" placeholder="Play with me! Try some code"></textarea>
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
