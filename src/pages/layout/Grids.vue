<template>
  <section>
    <h2 id="flow">Grids</h2>
    <p class="tw-light t-2 mb-3">
      Organize the content of your website with grids and make responsive layouts.
    </p>

    <h3>Flows</h3>
    <code-preview identifier="flows" lang="html">
      <div class="flow">
        <div class="col-2">
          <div class="bg-red px-1 br-1 b-white t-3 t-center t-white">.col-2</div>
        </div>
        <div class="col-10">
          <div class="bg-red px-1 t-3 t-center t-white">.col-10</div>
        </div>
      </div>
    </code-preview>

    <h3>
      Wrappers
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <code-preview identifier="wrappers" lang="html">
      <div class="wrapper">
        <div class="one">
          <div class="bg-red px-1 t-3 t-center t-white">.one</div>
        </div>
        <div class="two">
          <div class="bg-red px-1 t-3 t-center t-white">.two</div>
        </div>
      </div>
    </code-preview>
  </section>
</template>

<script>
export default {

}
</script>
