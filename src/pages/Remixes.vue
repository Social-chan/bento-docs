<template>
  <div class="container">
    <section>
      <h2 id="buttons">Buttons</h2>

      <div class="flow justify-content-between d-flex">
        <div class="col-6 pr-2">
          <h3>Alt version</h3>
          <code-preview identifier="alt_buttons" lang="html">
            <button class="alt primary">Primary</button>&#32;
            <button class="alt secondary">Secondary</button>
          </code-preview>
        </div>

        <div class="col-6 pl-2">
          <h3>Omusubi version</h3>
          <code-preview identifier="omusubi_buttons" lang="html">
            <button class="omusubi primary text-white">Primary</button>&#32;
            <button class="omusubi secondary text-white">Secondary</button>
          </code-preview>
        </div>

        <div class="col-6 pr-2">
          <h3>Sushi version</h3>
          <code-preview identifier="sushi_buttons" lang="html">
            <button class="alt sushi primary">Primary</button>&#32;
            <button class="alt sushi secondary">Secondary</button>
          </code-preview>
        </div>

        <div class="col-6 pl-2">
          <h3>Onigiri version</h3>
          <code-preview identifier="onigiri_buttons" lang="html">
            <button class="onigiri primary text-white">Primary</button>&#32;
            <button class="onigiri-2 secondary text-white">B</button>
          </code-preview>
        </div>
      </div>
    </section>
    <section>
      <h2 id="forms">Forms</h2>

      <h3>Inputs</h3>
      <code-preview identifier="text_inputs" lang="html">
        <form>&#32;
          <input type="text" class="control" placeholder="input">&#32;
          <input type="text" class="primary control" placeholder="input .primary">&#32;
        </form>
      </code-preview>

      <h3>Inputs with</h3>
      <form class="mb-5">
        <div class="control with-icon">
          <input type="text" placeholder="input .with-icon">
          <i v-html="feather.toSvg('search')"></i>
        </div>
        <div class="control with-button">
          <input type="text" class="primary" placeholder="input .with-button">
          <button class="text-white" v-html="feather.toSvg('search')"></button>
        </div>
      </form>
    </section>
    <section>
      <h2 id="panels">Panels</h2>

      <div class="flow">
        <div class="col-6 pr-2">
          <h3>Sushi version</h3>
          <code-preview identifier="panel_sushi" lang="html">
            <div class="sushi panel bg-primary b-primary text-white">
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

      <h3>With icon</h3>
      <div class="flow">
        <div class="col-6 pr-2">
          <div class="panel bg-red text-white">
            <i class="feat" v-html="feather.toSvg('alert-triangle')"></i>
            <h4>Panel Red</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
        <div class="col-6 pl-2">
          <div class="omusubi panel bg-green text-white">
            <i class="feat" v-html="feather.toSvg('star')"></i>
            <h4>Panel Green</h4>
            <p>
              <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 id="sections">Sections</h2>

      <h3>Color variations</h3>
      <code-preview identifier="sections_colors" lang="html">
        <section class="p-4 bg-primary">
          <h2>
            Section
            <small>Primary</small>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos saepe minima sint cupiditate placeat inventore voluptate consequatur, repellat labore et ullam, odio ipsa iure expedita laborum maxime, molestias commodi! Corrupti.</p>
        </section>
        <section class="p-4 bg-secondary">
          <h2>
            Section
            <small>Secondary</small>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos saepe minima sint cupiditate placeat inventore voluptate consequatur, repellat labore et ullam, odio ipsa iure expedita laborum maxime, molestias commodi! Corrupti.</p>
        </section>
      </code-preview>
    </section>
  </div>
</template>

<script>
export default {

}
</script>
