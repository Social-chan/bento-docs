<template>
  <section class="mb-5">
    <h2>Buttons</h2>
    <p class="text-light text-2 mb-3">
      Buttons with many variations (as remixes) and colors.
    </p>

    <h3>Main colors</h3>
    <code-preview identifier="main_buttons" lang="html">
      <button class="primary text-white">Primary</button>&#32;
      <button class="secondary text-white">Secondary</button>
    </code-preview>

    <h3>Colors</h3>
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

    <div class="flow justify-content-between mt-4">
      <div class="col-12 col-md-6 pr-md-2">
        <h3>Alt version</h3>
        <code-preview identifier="alt_buttons" lang="html">
          <button class="alt primary">Primary</button>&#32;
          <button class="alt secondary">Secondary</button>
        </code-preview>
      </div>

      <div class="col-12 col-md-6 pl-md-2">
        <h3>Omusubi version</h3>
        <code-preview identifier="omusubi_buttons" lang="html">
          <button class="omusubi primary text-white">Primary</button>&#32;
          <button class="omusubi secondary text-white">Secondary</button>
        </code-preview>
      </div>

      <div class="col-12 col-md-6 pr-md-2">
        <h3>
          Teriyaki version
          <span class="omusubi bg-green text-white pbt-1 plr-2">new!</span>
        </h3>
        <code-preview identifier="buttons_teriyaki" lang="html">
          <button class="alt teriyaki primary">Primary</button>&#32;
          <button class="alt teriyaki secondary">Secondary</button>
        </code-preview>
      </div>

      <div class="col-12 col-md-6 pl-md-2">
        <h3>
          Onigiri version
          <span class="omusubi bg-green text-white pbt-1 plr-2">new!</span>
          <span class="omusubi bg-purple text-white pbt-1 plr-2">test</span>
        </h3>
        <code-preview identifier="onigiri_buttons" lang="html">
          <button class="onigiri primary text-white">Primary</button>&#32;
          <button class="onigiri-2 secondary text-white">B</button>
        </code-preview>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
