<template>
  <div class="container">
    <section>
      <h2 id="flow">Grids</h2>

      <h3>Flows</h3>
      <code-preview identifier="flows" lang="html">
        <div class="flow">
          <div class="col-2">
            <div class="panel bg-red br-1 b-white demo">.col-2</div>
          </div>
          <div class="col-10">
            <div class="panel bg-red demo">.col-10</div>
          </div>
        </div>
      </code-preview>
    </section>
    <section class="mb-5">
      <h2 id="buttons">Buttons</h2>

      <h3>Main colors</h3>
      <code-preview identifier="main_buttons" lang="html">
        <button class="primary text-white">Primary</button>&#32;
        <button class="secondary text-white">Secondary</button>
      </code-preview>

      <h3>UI colors</h3>
      <code-preview identifier="colored_buttons" lang="html">
        <button class="red text-white">Red</button>&#32;
        <button class="black text-white">Black</button>&#32;
        <button class="green text-white">Green</button>&#32;
        <button class="brown text-white">Brown</button>&#32;
        <button class="orange text-white">Orange</button>&#32;
        <button class="purple text-white">Purple</button>&#32;
        <button class="yellow text-white">Yellow</button>&#32;
        <button class="pink text-white">Pink</button>&#32;
        <button class="darkgreen text-white">Dark green</button>&#32;
        <button class="cyan text-white">Cyan</button>
      </code-preview>

      <h3>With icons</h3>
      <button class="alt primary">
        <i v-html="feather.toSvg('user-plus')"></i> Add friend
      </button>
      <button class="red text-white">
        <i v-html="feather.toSvg('user-minus')"></i> Remove friend
      </button>
    </section>
    <section>
      <h2 id="panels">Panels</h2>

      <h3>Basic example</h3>

      <div class="flow">
        <div class="col-6 pr-2">
          <code-preview identifier="panel_primary" lang="html">
            <div class="panel bg-primary">
              <h4>Panel Primary</h4>
              <p>
                <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </code-preview>
        </div>
        <div class="col-6 pl-2">
          <code-preview identifier="panel_secondary" lang="html">
            <div class="panel bg-secondary">
              <h4>Panel Secondary</h4>
              <p>
                <a href="#">Lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </code-preview>
        </div>
      </div>
    </section>
    <section>
      <h2 id="tooltips">Tooltips</h2>

      <h3>Basic example</h3>
      <code-preview identifier="tooltip_default" lang="html">
        <a href="#" class="tooltip-top" aria-label="Default tooltip">Hover this text</a>
      </code-preview>

      <h3>Positions</h3>
      <code-preview identifier="tooltip_positions" lang="html">
        <div class="flow text-center">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: {
        main: '',
        colored: '<button class="red text-white">Red</button>\n<button class="black text-white">Black</button>\n<button class="green text-white">Green</button>\n<button class="brown text-white">Brown</button>\n<button class="orange text-white">Orange</button>\n<button class="purple text-white">Purple</button>\n<button class="yellow text-white">Yellow</button>\n<button class="pink text-white">Pink</button>\n<button class="darkgreen text-white">Dark green</button>\n<button class="cyan text-white">Cyan</button>',
        icon: '<button class="alt primary"><i data-feather="user-plus"></i> Add friend</button>\n<button class="red text-white"><i data-feather="user-minus"></i> Remove friend</button>'
      },
      forms: {
        inputs: '<p class="control with-icon"><input type="text" placeholder="input .with-icon">'
      }
    }
  }
}
</script>
