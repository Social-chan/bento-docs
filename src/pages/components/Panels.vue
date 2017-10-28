<template>
  <section>
    <h2>Panels</h2>
    <p class="t-2 mb-3">
      Show featured content with panels like application errors or successful alerts.
    </p>

    <h3>Basic example</h3>
    <div class="flow">
      <div class="cl-6 pr-2">
        <code-preview identifier="panel_primary" lang="html">
          <div class="bg-blue p-3 t-white">
            <h4 class="mb-2">Blue Panel</h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </code-preview>
      </div>
      <div class="cl-6 pl-2">
        <code-preview identifier="panel_secondary" lang="html">
          <div class="bg-gray p-3 t-white">
            <h4 class="mb-2">Gray Panel</h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </code-preview>
      </div>
    </div>

    <div class="flow">
      <div class="cl-6 pr-2">
        <h3>
          Teriyaki version
          <span class="bg-green bs-rounded py-1 t-white">new!</span>
          <span class="bg-purple bs-rounded py-1 t-white">test</span>
        </h3>
        <code-preview identifier="teriyaki_panel" lang="html">
          <div class="b-2 b-blue bs-dashed p-3 t-blue">
            <h4 class="mb-2">Blue Panel</h4>&#32;
            <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
          </div>
        </code-preview>
      </div>
      <div class="cl-6 pl-2">
        <h3>
          Omusubi version
          <span class="bg-green bs-rounded py-1 t-white">new!</span>
        </h3>
        <code-preview identifier="omusubi_panel" lang="html">
          <div class="bg-gray p-3 bs-rounded t-white">
            <h4 class="mb-2">Gray Panel</h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </code-preview>
      </div>
    </div>

    <h3>
      With icon
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <div class="flow">
      <div class="cl-6 pr-2">
        <div class="bg-red bs-rounded p-3 t-white">
          <h4 class="mb-2">
            <i class="icon" v-html="feather.toSvg('alert-triangle')"></i>
            Panel Red
          </h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </div>
      </div>
      <div class="cl-6 pl-2">
        <div class="bg-green p-3 t-white">
          <h4 class="mb-2">
            <i class="icon" v-html="feather.toSvg('star')"></i>
            Green Panel
          </h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
