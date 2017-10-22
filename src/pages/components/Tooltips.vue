<template>
  <section>
    <h2 id="tooltips">
      Tooltips
    </h2>
    <p class="tw-light t-2 mb-3">
      Small bubble messages made in pure CSS.
    </p>

    <h3>Basic example</h3>
    <code-preview identifier="tooltip_default" lang="html">
      <a href="#" class="tooltip-top" aria-label="Default tooltip">Hover this text</a>
    </code-preview>

    <h3>Positions</h3>
    <code-preview identifier="tooltip_positions" lang="html">
      <div class="flow t-center">
        <div class="col-3">&#32;
          <a href="#" class="tooltip-top" aria-label="Top tooltip">Top</a>&#32;
        </div>
        <div class="col-3">&#32;
          <a href="#" class="tooltip-bottom" aria-label="Bottom tooltip">Bottom</a>&#32;
        </div>
        <div class="col-3">&#32;
          <a href="#" class="tooltip-left" aria-label="Left tooltip">Left</a>&#32;
        </div>
        <div class="col-3">&#32;
          <a href="#" class="tooltip-right" aria-label="Right tooltip">Right</a>&#32;
        </div>
      </div>
    </code-preview>
  </section>
</template>

<script>
export default {

}
</script>
