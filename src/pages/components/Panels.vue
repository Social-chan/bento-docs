<template>
  <section>
    <h2>Panels</h2>
    <p class="tw-light t-2 mb-3">
      Show featured content with panels like application errors or successful alerts.
    </p>

    <h3>Basic example</h3>
    <div class="flow">
      <div class="col-6 pr-2">
        <code-preview identifier="panel_primary" lang="html">
          <div class="bg-primary p-3 t-white">
            <h4 class="mb-2">Panel Primary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
      <div class="col-6 pl-2">
        <code-preview identifier="panel_secondary" lang="html">
          <div class="bg-secondary p-3 t-white">
            <h4 class="mb-2">Panel Secondary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
    </div>

    <div class="flow">
      <div class="col-6 pr-2">
        <h3>
          Teriyaki version
          <span class="bg-green bs-rounded py-1 t-white">new!</span>
          <span class="bg-purple bs-rounded py-1 t-white">test</span>
        </h3>
        <code-preview identifier="teriyaki_panel" lang="html">
          <div class="bg-primary p-3 bs-dashed b-2 t-white">
            <h4 class="mb-2">Panel Primary</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
      <div class="col-6 pl-2">
        <h3>
          Omusubi version
          <span class="bg-green bs-rounded py-1 t-white">new!</span>
        </h3>
        <code-preview identifier="omusubi_panel" lang="html">
          <div class="bg-secondary p-3 bs-rounded t-white">
            <h4 class="mb-2">Panel Secondary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
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
      <div class="col-6 pr-2">
        <div class="panel bg-red t-white">
          <i class="icon" v-html="feather.toSvg('alert-triangle')"></i>
          <h4>Panel Red</h4>
          <p>
            <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
      <div class="col-6 pl-2">
        <div class="omusubi panel bg-green t-white">
          <i class="icon" v-html="feather.toSvg('star')"></i>
          <h4>Panel Green</h4>
          <p>
            <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
