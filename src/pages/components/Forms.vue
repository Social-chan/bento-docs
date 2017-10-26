<template>
  <section>
    <h2>Forms</h2>
    <p class="t-2 mb-3">
      Inputs, textareas, labels and more form elements customized.
    </p>

    <h3>Inputs</h3>
    <code-preview identifier="text_inputs" lang="html">
      <form>&#32;
        <input type="text" class="b-2 p-2 mb-2 t-secondary" placeholder="input">&#32;
        <input type="text" class="b-2 p-2 mb-2 t-secondary" placeholder="input .primary">&#32;
      </form>
    </code-preview>

    <h3>
      Inputs with
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <form class="mb-5">
      <div class="control with-icon">
        <input type="text" placeholder="input .with-icon">
        <i v-html="feather.toSvg('search')"></i>
      </div>
      <div class="control with-button">
        <input type="text" class="primary" placeholder="input .with-button">
        <button class="t-white" v-html="feather.toSvg('search')"></button>
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>
