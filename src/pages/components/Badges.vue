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
      <span class="bg-blue py-2 t-white">Blue</span>&#32;
      <span class="bg-gray py-2 t-white">Gray</span>&#32;
      <span class="bg-red py-2 t-white">Red</span>&#32;
      <span class="bg-black py-2 t-white">Black</span>&#32;
      <span class="bg-green py-2 t-white">Green</span>&#32;
      <span class="bg-brown py-2 t-white">Brown</span>&#32;
      <span class="bg-orange py-2 t-white">Orange</span>&#32;
      <span class="bg-purple py-2 t-white">Purple</span>&#32;
      <span class="bg-yellow py-2 t-white">Yellow</span>&#32;
      <span class="bg-cyan py-2 t-white">Cyan</span>
    </code-preview>

    <h3>Sizes</h3>
    <code-preview identifier="sizing_badges" lang="html">
      <span class="bg-blue py-2 t-0 t-white">Mini</span>&#32;
      <span class="bg-blue py-2 t-white">Normal</span>&#32;
      <span class="bg-blue py-2 t-2 t-white">Large</span>&#32;
      <span class="bg-blue py-2 t-3 t-white">Big</span>
    </code-preview>

    <h3>Wrappers</h3>
    <code-preview identifier="sizing_wrappers" lang="html">
      <span class="bg-blue py-2 t-white">Span</span>&#32;
      <a href="#" class="bg-blue py-2 t-white">Link</a>
    </code-preview>

    <div class="flow justify-content-between mt-4">
      <div class="cl-12 cl-md-6 pr-md-2">
        <h3>Alt version</h3>
        <code-preview identifier="alt_badges" lang="html">
          <span class="b-1 b-blue py-2 t-blue">Primary</span>&#32;
          <span class="b-1 b-gray py-2 t-gray">Secondary</span>
        </code-preview>
      </div>
      <div class="cl-12 cl-md-auto pr-md-2">
        <h3>Omusubi version</h3>
        <code-preview identifier="omusubi_badges" lang="html">
          <span class="bg-blue bs-rounded py-2 t-white">Primary</span>&#32;
          <span class="bg-gray bs-rounded py-2 t-white">Secondary</span>
        </code-preview>
      </div>
      <div class="cl-12 cl-md-6 pr-md-2">
        <h3>Teriyaki version</h3>
        <code-preview identifier="teriyaki_badges" lang="html">
          <span class="b-2 bs-dashed b-blue py-2 t-blue">Primary</span>&#32;
          <span class="b-2 bs-dashed b-gray py-2 t-gray">Secondary</span>
        </code-preview>
      </div>
      <div class="cl-12 cl-md-6 pr-md-2">
        <h3>Onigiri version</h3>
        <code-preview identifier="onigiri_badges" lang="html">
          <span class="bg-green bs-circle py-1 t-0 t-white">1</span>&#32;
          <span class="d-inline-block bg-red bs-circle s-1 t-white"></span>
        </code-preview>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
