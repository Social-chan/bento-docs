<template>
  <section>
    <h3>Introduction</h3>
    <p>
      Bento is made for developers/designers who wants take more "freedom" to
      prototyping with flexible customization at sintax, colors and more...
    </p>

    <div class="bg-blue p-3 t-white">
      <h4 class="mb-2">Advice</h4>
      We recommend to visit <router-link class="tw-semibold is-hoverable t-white" :to="{ name: 'c' }">Components</router-link> section for better understanding framework
      classes and it representation, remember that you can try code at Playground.
    </div>

    <h4>Legend</h4>
    <div class="mr-2 d-flex">
      <span class="bg-darkcyan bs-left-rounded py-2 t-white">Responsive</span>
      <span class="bg-darkgreen bs-right-rounded py-2 t-white">Yes</span>
    </div>
    <p>
      If the element or utility has got responsive breakpoints like:
      <code>{prefix}-sm-*</code>, <code>{prefix}-md-*</code>,
      <code>{prefix}-lg-*</code> or <code>{prefix}-xl-*</code>
    </p>
    <div class="mr-2 d-flex">
      <span class="bg-darkpurple bs-left-rounded py-2 t-white">Variables</span>
      <span class="bg-darkgreen bs-right-rounded py-2 t-white">Yes</span>
    </div>
    <p>
      If the element or utility has got exclusive variables declared on
      <code>_variables.scss</code> file.
    </p>
    <div class="mr-2 d-flex">
      <span class="bg-darkorange bs-left-rounded py-2 t-white">Version</span>
      <span class="bg-darkgray bs-right-rounded py-2 t-white">0.6.0</span>
    </div>
    <p>
      Element/utility is available since version 0.6.0.
    </p>
    <div class="mr-2 d-flex">
      <span class="bg-darkblack bs-left-rounded py-2 t-white">Deprecated</span>
      <span class="bg-darkred bs-right-rounded py-2 t-white">1.0.0</span>
    </div>
    <p>
      Element/utility is deprecated (deleted or in deletion plans) at version 1.0.0.
    </p>
  </section>
</template>
