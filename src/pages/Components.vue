<template>
  <div class="container">
    <section>
      <h2 id="buttons">Buttons</h2>

      <h3>Main colors</h3>
      <code-preview identifier="main_buttons" lang="html">
        <button class="primary text-white">Primary</button>&#32;
        <button class="secondary text-white">Secondary</button>
      </code-preview>

      <h3>UI colors</h3>
      <code-preview identifier="colored_buttons" lang="html">
        <button class="red text-white">Red</button>&#32;
        <button class="black text-white">Black</button>&#32;
        <button class="green text-white">Green</button>&#32;
        <button class="brown text-white">Brown</button>&#32;
        <button class="orange text-white">Orange</button>&#32;
        <button class="purple text-white">Purple</button>&#32;
        <button class="yellow text-white">Yellow</button>&#32;
        <button class="pink text-white">Pink</button>&#32;
        <button class="darkgreen text-white">Dark green</button>&#32;
        <button class="cyan text-white">Cyan</button>
      </code-preview>

      <h3>With icons</h3>
      <button class="alt primary">
        <i v-html="feather.toSvg('user-plus')"></i> Add friend
      </button>
      <button class="red text-white">
        <i v-html="feather.toSvg('user-minus')"></i> Remove friend
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: {
        main: '',
        colored: '<button class="red text-white">Red</button>\n<button class="black text-white">Black</button>\n<button class="green text-white">Green</button>\n<button class="brown text-white">Brown</button>\n<button class="orange text-white">Orange</button>\n<button class="purple text-white">Purple</button>\n<button class="yellow text-white">Yellow</button>\n<button class="pink text-white">Pink</button>\n<button class="darkgreen text-white">Dark green</button>\n<button class="cyan text-white">Cyan</button>',
        icon: '<button class="alt primary"><i data-feather="user-plus"></i> Add friend</button>\n<button class="red text-white"><i data-feather="user-minus"></i> Remove friend</button>'
      },
      forms: {
        inputs: '<p class="control with-icon"><input type="text" placeholder="input .with-icon">'
      }
    }
  }
}
</script>
