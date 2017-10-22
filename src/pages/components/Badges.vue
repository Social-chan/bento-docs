<template>
  <section>
    <h3>
      Badges
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
    </h3>
    <p class="tw-light t-2 mb-5">
      Mark visual featured content into categories.
    </p>

    <h3>Default</h3>
    <code-preview identifier="default_badges" lang="html">
      <span class="bg-primary py-2 t-white">Primary</span>&#32;
      <span class="bg-secondary py-2 t-white">Secondary</span>
    </code-preview>

    <h3>Colors</h3>
    <code-preview identifier="colors_badges" lang="html">
      <span class="bg-red py-2 t-white">Red</span>&#32;
      <span class="bg-black py-2 t-white">Black</span>&#32;
      <span class="bg-green py-2 t-white">Green</span>&#32;
      <span class="bg-brown py-2 t-white">Brown</span>&#32;
      <span class="bg-orange py-2 t-white">Orange</span>&#32;
      <span class="bg-purple py-2 t-white">Purple</span>&#32;
      <span class="bg-yellow py-2 t-white">Yellow</span>&#32;
      <span class="bg-darkgreen py-2 t-white">Darkgreen</span>&#32;
      <span class="bg-cyan py-2 t-white">Cyan</span>
    </code-preview>

    <h3>Sizing</h3>
    <code-preview identifier="sizing_badges" lang="html">
      <span class="bg-primary py-2 t-white">Default</span>&#32;
      <span class="bg-primary py-2 t-1 t-white">Normal</span>&#32;
      <span class="bg-primary py-2 t-2 t-white">Large</span>&#32;
      <span class="bg-primary py-2 text-3 t-white">Huge</span>
    </code-preview>

    <h3>Wrappers</h3>
    <code-preview identifier="sizing_wrappers" lang="html">
      <span class="bg-primary py-2 t-white">Span</span>&#32;
      <a href="#" class="bg-primary py-2 t-white">Link</a>
    </code-preview>

    <div class="flow justify-content-between mt-4">
      <div class="col-12 col-md-6 pr-md-2">
        <h3>Alt version</h3>
        <code-preview identifier="alt_badges" lang="html">
          <span class="b-1 b-primary py-2 text-primary">Primary</span>&#32;
          <span class="b-1 b-secondary py-2 text-secondary">Secondary</span>
        </code-preview>
      </div>
      <div class="col-12 col-md-6 pr-md-2">
        <h3>Omusubi version</h3>
        <code-preview identifier="omusubi_badges" lang="html">
          <span class="bg-primary omusubi py-2 t-white">Primary</span>&#32;
          <span class="bg-secondary omusubi py-2 t-white">Secondary</span>
        </code-preview>
      </div>
      <div class="col-12 col-md-6 pr-md-2">
        <h3>Teriyaki version</h3>
        <code-preview identifier="teriyaki_badges" lang="html">
          <span class="b-1 bs-dashed b-primary py-2 text-primary">Primary</span>&#32;
          <span class="b-1 bs-dashed b-secondary py-2 text-secondary">Secondary</span>
        </code-preview>
      </div>
      <div class="col-12 col-md-6 pr-md-2">
        <h3>Onigiri version</h3>
        <code-preview identifier="onigiri_badges" lang="html">
          <span class="bg-green onigiri py-1 text-0 t-white">1</span>&#32;
          <span class="d-inline-block bg-red onigiri s-1 t-white"></span>
        </code-preview>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
