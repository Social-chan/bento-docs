<template>
  <div class="container">
    <section>
      <h2 id="buttons">Buttons</h2>

      <div class="row justify-content-between d-flex">
        <div class="col-5">
          <h3>Alt version</h3>
          <code-preview identifier="alt_buttons" lang="html">
            <button class="alt primary">Primary</button>&#32;
            <button class="alt secondary">Secondary</button>
          </code-preview>
        </div>

        <div class="col-5">
          <h3>Omusubi version</h3>
          <code-preview identifier="omusubi_buttons" lang="html">
            <button class="omusubi primary text-white">Primary</button>&#32;
            <button class="omusubi secondary text-white">Secondary</button>
          </code-preview>
        </div>

        <div class="col-5">
          <h3>Sushi version</h3>
          <code-preview identifier="omusubi_buttons" lang="html">
            <button class="alt sushi primary">Primary</button>&#32;
            <button class="alt sushi secondary">Secondary</button>
          </code-preview>
        </div>

        <div class="col-5">
          <h3>Onigiri version</h3>
          <code-preview identifier="onigiri_buttons" lang="html">
            <button class="onigiri-1 primary text-white">A</button>&#32;
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
          <input type="text" placeholder="input">&#32;
          <input type="text" class="primary" placeholder="input .primary">&#32;
        </form>
      </code-preview>

      <h3>Inputs with</h3>
      <span class="control with-icon">
        <input type="text" placeholder="input .with-icon">
        <i v-html="feather.toSvg('search')"></i>
      </span>
      <span class="control with-button">
        <input type="text" class="primary" placeholder="input .with-button">
        <button class="text-white" v-html="feather.toSvg('search')"></button>
      </span>
    </section>
  </div>
</template>

<script>
export default {

}
</script>
