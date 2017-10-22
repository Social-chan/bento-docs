<template>
  <section>
    <h3>
      Tables
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
    </h3>
    <p class="tw-light t-2 mb-5">
      Organize too much content in cells (tables).
    </p>

    <h3>Default</h3>
    <code-preview identifier="default_table" lang="html">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Fish and chips</td>
            <td>1$</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dorayaki</td>
            <td>2.50$</td>
          </tr>
        </tbody>
      </table>
    </code-preview>

    <h3>Responsive</h3>
    <code-preview identifier="responsive_table" lang="html">
      <table class="responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Fish and chips</td>
            <td>1$</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dorayaki</td>
            <td>2.50$</td>
          </tr>
        </tbody>
      </table>
    </code-preview>
  </section>
</template>

<script>
export default {

}
</script>
