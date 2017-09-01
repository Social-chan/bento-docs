<template>
  <div class="container">
    <section>
      <h2 id="buttons">Buttons</h2>

      <div class="row">
        <div class="column three">
          <h3>Alt version</h3>
          <div v-html="buttons.alt"></div>
          <pre v-highlightjs="buttons.alt">
            <code class="html"></code>
          </pre>
        </div>
        <div class="column three">
          <h3>Omusubi version</h3>
          <div v-html="buttons.omusubi"></div>
          <pre v-highlightjs="buttons.omusubi">
            <code class="html"></code>
          </pre>
        </div>
        <div class="column three">
          <h3>Sushi version</h3>
          <div v-html="buttons.sushi"></div>
          <pre v-highlightjs="buttons.sushi">
            <code class="html"></code>
          </pre>
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
  data () {
    return {
      buttons: {
        alt: '<button class="alt primary">Primary</button>\n<button class="alt secondary">Secondary</button>',
        omusubi: '<button class="omusubi primary text-white">Primary</button>\n<button class="omusubi secondary text-white">Secondary</button>',
        sushi: '<button class="sushi primary">Primary</button>\n<button class="sushi secondary">Secondary</button>'
      }
    }
  }
}
</script>
