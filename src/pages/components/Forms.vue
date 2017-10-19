<template>
  <section>
    <h2>Forms</h2>

    <h3>Inputs</h3>
    <code-preview identifier="text_inputs" lang="html">
      <form>&#32;
        <input type="text" class="control" placeholder="input">&#32;
        <input type="text" class="primary control" placeholder="input .primary">&#32;
      </form>
    </code-preview>

    <h3>
      Inputs with
      <span class="omusubi bg-green text-white pbt-1 plr-2">new!</span>
      <span class="omusubi bg-purple text-white pbt-1 plr-2">test</span>
    </h3>
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
</template>

<script>
export default {

}
</script>
