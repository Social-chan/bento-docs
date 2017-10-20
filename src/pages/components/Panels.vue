<template>
  <section>
    <h2>Panels</h2>
    <p class="text-light text-2 mb-3">
      Show featured content with panels like application errors or successful alerts.
    </p>

    <h3>Basic example</h3>
    <div class="flow">
      <div class="col-6 pr-2">
        <code-preview identifier="panel_primary" lang="html">
          <div class="panel bg-primary text-white">
            <h4>Panel Primary</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
      <div class="col-6 pl-2">
        <code-preview identifier="panel_secondary" lang="html">
          <div class="panel bg-secondary text-white">
            <h4>Panel Secondary</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
    </div>

    <div class="flow">
      <div class="col-6 pr-2">
        <h3>
          Teriyaki version
          <span class="badge omusubi bg-green text-white">new!</span>
        </h3>
        <code-preview identifier="panel_sushi" lang="html">
          <div class="teriyaki panel bg-primary b-primary text-white">
            <h4>Panel Primary</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
      <div class="col-6 pl-2">
        <h3>Omusubi version</h3>
        <code-preview identifier="panel_omusubi" lang="html">
          <div class="omusubi panel bg-secondary b-secondary text-white">
            <h4>Panel Secondary</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </code-preview>
      </div>
    </div>

    <h3>
      With icon
      <span class="badge omusubi bg-green text-white">new!</span>
      <span class="badge omusubi bg-purple text-white">test</span>
    </h3>
    <div class="flow">
      <div class="col-6 pr-2">
        <div class="panel bg-red text-white">
          <i class="icon" v-html="feather.toSvg('alert-triangle')"></i>
          <h4>Panel Red</h4>
          <p>
            <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
      <div class="col-6 pl-2">
        <div class="omusubi panel bg-green text-white">
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
