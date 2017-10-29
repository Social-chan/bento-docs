<template>
  <section>
    <h2>
      Progress
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
    </h2>
    <p class="t-2 mb-3">
      Native progress bars with HTML5 progress element supported by many browsers.
    </p>

    <h3>Default</h3>
    <code-preview identifier="progress_default" lang="html">
      <progress max="100" value="80"></progress>
    </code-preview>

    <h3>Colors</h3>
    <code-preview identifier="progress_colors" lang="html">
      <progress class="blue" max="100" value="80"></progress>&#32;
      <progress class="gray" max="100" value="75"></progress>&#32;
      <progress class="red" max="100" value="70"></progress>&#32;
      <progress class="black" max="100" value="65"></progress>&#32;
      <progress class="green" max="100" value="60"></progress>&#32;
      <progress class="brown" max="100" value="55"></progress>&#32;
      <progress class="orange" max="100" value="50"></progress>&#32;
      <progress class="purple" max="100" value="45"></progress>&#32;
      <progress class="yellow" max="100" value="40"></progress>&#32;
      <progress class="pink" max="100" value="35"></progress>&#32;
      <progress class="cyan" max="100" value="30"></progress>
    </code-preview>

    <h3>Value</h3>
    <code-preview identifier="progress_value" lang="html">
      <progress class="blue value" max="100" value="61"></progress>
    </code-preview>

    <h3>
      Packed
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <code-preview identifier="packed_progress" lang="html">
      <div class="flow mt-2">&#32;
        <progress class="w-75" max="80" value="80"></progress>&#32;
        <progress class="red w-25" max="20" value="20"></progress>&#32;
      </div>
    </code-preview>
  </section>
</template>

<script>
export default {

}
</script>
