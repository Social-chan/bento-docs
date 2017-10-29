<template>
  <section>
    <h2>Inputs</h2>
    <p class="t-2 mb-3">
      Inputs (text, password, email, etc), labels and more form elements customized.
    </p>

    <h3>Inputs</h3>
    <code-preview identifier="text_inputs" lang="html">
      <form>&#32;
        <input type="text" class="p-2" placeholder="nickname">&#32;
        <input type="password" class="p-2" placeholder="password">&#32;
      </form>
    </code-preview>

    <h3>Textarea</h3>
    <code-preview identifier="default_textarea" lang="html">
      <textarea class="p-2 mb-2"></textarea>&#32;
      <textarea class="p-2 is-responsive"></textarea>
    </code-preview>

    <h3>
      Inputs with
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <code-preview identifier="button_input" lang="html">
      <div class="flow mb-2">&#32;
        <input type="text" class="p-2" placeholder="input with button">&#32;
        <button class="bg-gray is-hoverable t-white">Go!</button>&#32;
      </div>
      <div class="flow">&#32;
        <input type="text" class="p-2 bs-left-rounded" placeholder="input with button">&#32;
        <button class="bg-gray is-hoverable bs-right-rounded t-white">Go!</button>&#32;
      </div>
    </code-preview>
  </section>
</template>

<script>
export default {

}
</script>
