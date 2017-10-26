<template>
  <section class="mb-5">
    <h2>Buttons</h2>
    <p class="tw-light t-2 mb-3">
      Buttons with many variations (as remixes) and colors.
    </p>

    <h3>Default</h3>
    <code-preview identifier="main_buttons" lang="html">
      <button class="bg-blue is-hoverable px-2 py-3 t-white">Blue</button>&#32;
      <button class="bg-gray is-hoverable px-2 py-3 t-white">Gray</button>&#32;
      <button class="bg-red is-hoverable px-2 py-3 t-white">Red</button>&#32;
      <button class="bg-black is-hoverable px-2 py-3 t-white">Black</button>&#32;
      <button class="bg-green is-hoverable px-2 py-3 t-white">Green</button>&#32;
      <button class="bg-brown is-hoverable px-2 py-3 t-white">Brown</button>&#32;
      <button class="bg-orange is-hoverable px-2 py-3 t-white">Orange</button>&#32;
      <button class="bg-purple is-hoverable px-2 py-3 t-white">Purple</button>&#32;
      <button class="bg-yellow is-hoverable px-2 py-3 t-white">Yellow</button>&#32;
      <button class="bg-pink is-hoverable px-2 py-3 t-white">Pink</button>&#32;
      <button class="bg-cyan is-hoverable px-2 py-3 t-white">Cyan</button>
    </code-preview>

    <h3>
      Sizes
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
    </h3>
    <code-preview identifier="sizes_buttons" lang="html">
      <button class="bg-blue is-hoverable px-1 py-2 t-0 t-white">Small</button>&#32;
      <button class="bg-blue is-hoverable px-2 py-3 t-white">Normal</button>&#32;
      <button class="bg-blue is-hoverable px-2 py-3 t-1 t-white">Large</button>&#32;
      <button class="bg-blue is-hoverable px-2 py-4 t-2 t-white">Big</button>&#32;
      <button class="bg-blue is-hoverable px-2 py-4 t-3 t-white">Huge</button>&#32;
    </code-preview>

    <h3>
      With icons
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <button class="b-2 b-blue bg-white is-hoverable px-2 py-3 t-blue">
      <i v-html="feather.toSvg('user-plus')"></i> Add friend
    </button>
    <button class="b-2 b-white bg-red is-hoverable px-2 py-3 t-white">
      <i v-html="feather.toSvg('user-minus')"></i> Remove friend
    </button>

    <div class="flow justify-content-between mt-4">
      <div class="col-12 col-md-6 pr-md-2">
        <h3>Alt version</h3>
        <code-preview identifier="alt_buttons" lang="html">
          <button class="b-2 b-blue bg-white is-hoverable px-2 py-3 t-blue">Blue</button>&#32;
          <button class="b-2 b-gray bg-white is-hoverable px-2 py-3 t-gray">Gray</button>
        </code-preview>
      </div>

      <div class="col-12 col-md-6 pl-md-2">
        <h3>Omusubi version</h3>
        <code-preview identifier="omusubi_buttons" lang="html">
          <button class="bg-blue is-hoverable bs-rounded px-2 py-3 t-white">Blue</button>&#32;
          <button class="bg-gray is-hoverable bs-rounded px-2 py-3 t-white">Gray</button>
        </code-preview>
      </div>

      <div class="col-12 col-md-6 pr-md-2">
        <h3>
          Teriyaki version
          <span class="bg-green bs-rounded py-1 t-white">new!</span>
        </h3>
        <code-preview identifier="buttons_teriyaki" lang="html">
          <button class="b-blue b-2 bs-dashed bg-transparent is-hoverable px-2 py-3 t-blue">Blue</button>&#32;
          <button class="b-gray b-2 bs-dashed bg-transparent is-hoverable px-2 py-3 t-gray">Gray</button>
        </code-preview>
      </div>

      <div class="col-12 col-md-6 pl-md-2">
        <h3>
          Onigiri version
          <span class="bg-green bs-rounded py-1 t-white">new!</span>
          <span class="bg-purple bs-rounded py-1 t-white">test</span>
        </h3>
        <code-preview identifier="onigiri_buttons" lang="html">
          <button class="d-inline-block bg-blue bs-circle s-5 t-3 t-white">B</button>&#32;
          <button class="d-inline-block bg-gray bs-circle s-4 t-2 t-white">S</button>
        </code-preview>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
