<template>
  <div class="container">
    <section>
      <h2 id="buttons">Buttons</h2>

      <h3>Main colors</h3>
      <div v-html="main_colors_buttons"></div>
      <pre v-highlightjs="main_colors_buttons">
        <code class="html"></code>
      </pre>

      <h3>UI colors</h3>
      <div v-html="ui_colors_buttons"></div>
      <pre v-highlightjs="ui_colors_buttons">
        <code class="html"></code>
      </pre>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      main_colors_buttons: '<button class="primary text-white">Primary</button>\n<button class="secondary text-white">Secondary</button>',
      ui_colors_buttons: '<button class="red text-white">Red</button>\n<button class="black text-white">Black</button>\n<button class="green text-white">Green</button>\n<button class="brown text-white">Brown</button>\n<button class="orange text-white">Orange</button>\n<button class="purple text-white">Purple</button>\n<button class="yellow text-white">Yellow</button>\n<button class="pink text-white">Pink</button>\n<button class="darkgreen text-white">Dark green</button>\n<button class="cyan text-white">Cyan</button>',
      test: ''
    }
  }
}
</script>
