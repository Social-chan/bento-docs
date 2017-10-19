<template>
  <section>
    <h2 id="flow">Grids</h2>
    <p class="text-light text-2 mb-3">
      Organize the content of your website with grids and make responsive layouts.
    </p>

    <h3>Flows</h3>
    <code-preview identifier="flows" lang="html">
      <div class="flow">
        <div class="col-2">
          <div class="panel bg-red br-1 b-white text-white demo">.col-2</div>
        </div>
        <div class="col-10">
          <div class="panel bg-red text-white demo">.col-10</div>
        </div>
      </div>
    </code-preview>

    <h3>
      Wrappers
      <span class="omusubi bg-green text-white pbt-1 plr-2">new!</span>
      <span class="omusubi bg-purple text-white pbt-1 plr-2">test</span>
    </h3>
    <code-preview identifier="wrappers" lang="html">
      <div class="wrapper">
        <div class="one">
          <div class="panel bg-red br-1 b-white text-white demo">.one</div>
        </div>
        <div class="two">
          <div class="panel bg-red text-white demo">.two</div>
        </div>
      </div>
    </code-preview>

    <h3>Variables</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$grid-cols</td>
          <td>12</td>
        </tr>
        <tr>
          <td>$grid-spacing</td>
          <td>140px</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {

}
</script>
