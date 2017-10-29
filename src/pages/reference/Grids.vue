<template>
  <section>
    <h3>Grids</h3>

    <div class="flow mb-2">
      <div class="mr-2 d-flex">
        <span class="bg-darkcyan bs-left-rounded py-2 t-white">Responsive</span>
        <span class="bg-darkgreen bs-right-rounded py-2 t-white">Yes</span>
      </div>
      <div class="mr-2 d-flex">
        <span class="bg-darkpurple bs-left-rounded py-2 t-white">Variables</span>
        <span class="bg-darkgreen bs-right-rounded py-2 t-white">Yes</span>
      </div>
      <div class="mr-2 d-flex">
        <span class="bg-darkorange bs-left-rounded py-2 t-white">Version</span>
        <span class="bg-darkgray bs-right-rounded py-2 t-white">0.6.0</span>
      </div>
    </div>

    Bento has got a responsive grid system like <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a>
    it is divided by columns (<code>.cl-*</code>) into a row.

    <h4>Options</h4>
    <table class="responsive">
      <thead>
        <tr>
          <th></th>
          <th class="t-0 tw-light">< 576px</th>
          <th class="t-0 tw-light">≥ 576px</th>
          <th class="t-0 tw-light">≥ 768px</th>
          <th class="t-0 tw-light">≥ 992px</th>
          <th class="t-0 tw-light">≥ 1200px</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Max container width</td>
          <td>None (auto)</td>
          <td>540px</td>
          <td>720px</td>
          <td>960px</td>
          <td>1140px</td>
        </tr>
        <tr>
          <td>Class prefix</td>
          <td>
            <code>.cl-</code>
          </td>
          <td>
            <code>.cl-sm-</code>
          </td>
          <td>
            <code>.cl-md-</code>
          </td>
          <td>
            <code>.cl-lg-</code>
          </td>
          <td>
            <code>.cl-xl-</code>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
