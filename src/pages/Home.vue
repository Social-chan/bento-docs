<template>
  <div id="landing">
    <section class="docs-feature bg-gray t-white py-md-5">
      <div class="container">
        <div class="flow">
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('anchor')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('camera')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('bell')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('briefcase')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('check-square')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('cloud')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('cpu')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('droplet')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('hash')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('message-circle')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('moon')"></div>
          <div class="cl-3 cl-md-1 demo-icon" v-html="feather.toSvg('users')"></div>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="my-md-5">
        <div class="flow align-items-center docs-feature">
          <div class="cl-12 cl-md-2 mb-3">
            <img src="../../static/img/bento_ui-logo.svg" alt>
          </div>
          <div class="cl-12 cl-md-9 ml-md-4">
            <h3>Bento UI</h3>
            <p class="mb-md-2">
              Bento UI is a web design framework based in SCSS with layout and tons of utilities
              for rapid web design prototyping making lightweight the stylesheet (CSS) part
              and the markup (HTML) a little bit technical.
            </p>
            <p>
              It takes some little pieces of code from <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a>
              and <a href="https://bulma.io/" target="_blank">Bulma</a>, two of the bests
              web design frameworks.
            </p>
          </div>
        </div>
        <div class="flow align-items-center docs-feature">
          <div class="cl-12 cl-md-2 mb-3">
            <img src="../../static/img/socialchan-logo.svg" class="is-responsive" style="border-radius: 24px" alt>
          </div>
          <div class="cl-12 cl-md-9 ml-md-4">
            <h3>Social-chan</h3>
            <p class="mb-md-2">
              Bento UI is developed and maintained by <a href="https://social-chan.com" target="_blank">Social-chan team</a>,
              and the <a href="https://github.com/Social-chan/Bento/graphs/contributors" target="_blank">GitHub contributors</a>
              a team who was centered on the development of some web projects/services like Social-chan, Dojo, etc
              (and all of the <a href="https://github.com/Social-chan">Social-chan OSS hosted at Github</a>).
            </p>
            <p>
              <strong>Planned:</strong> Bento UI is the future of the Social-chan design (an anime and manga social network).
            </p>
          </div>
        </div>
      </section>
      <section class="mb-5">
        <h2>Discover a new...</h2>

        <h3>Colored UI</h3>
        <div class="flow justify-content-center mb-4 t-center" id="colors">
          <div class="cl-3 cl-md-1 bg-blue t-white">
            blue
          </div>
          <div class="cl-3 cl-md-1 bg-gray t-white">
            gray
          </div>
          <div class="cl-3 cl-md-1 bg-red t-white">
            red
          </div>
          <div class="cl-3 cl-md-1 bg-green t-white">
            green
          </div>
          <div class="cl-3 cl-md-1 bg-brown t-white">
            brown
          </div>
          <div class="cl-3 cl-md-1 bg-orange t-white">
            orange
          </div>
          <div class="cl-3 cl-md-1 bg-purple t-white">
            purple
          </div>
          <div class="cl-3 cl-md-1 bg-yellow t-white">
            yellow
          </div>
          <div class="cl-3 cl-md-1 bg-pink t-white">
            pink
          </div>
          <div class="cl-3 cl-md-1 bg-cyan t-white">
            cyan
          </div>
        </div>

        <div class="flow justify-content-center mb-2 t-center">
          <div class="cl-1">
            <button class="bg-gray bg-lighten bs-circle s-2 t-white" @click="slideColors('bg-lighten', 'bg-darken')"></button>
          </div>
          <div class="cl-1">
            <button class="bg-gray bs-circle s-2 t-white" @click="slideColors(null, ['bg-lighten', 'bg-darken'])"></button>
          </div>
          <div class="cl-1">
            <button class="bg-gray bg-darken bs-circle s-2 t-white" @click="slideColors('bg-darken', 'bg-lighten')"></button>
          </div>
        </div>

        <h3 class="mt-4">Sandbox</h3>
        <div class="flow mb-2 t-center">
          <div class="cl-3 cl-md-1 py-2">
            <div class="bg-gray b-1 t-white">
              Border
            </div>
          </div>
          <div class="cl-3 cl-md-1 py-2">
            <div class="bg-gray b-1 bs-dashed t-white">
              Dashed
            </div>
          </div>
          <div class="cl-3 cl-md-1 py-2">
            <div class="bg-gray b-1 bs-dotted t-white">
              Dotted
            </div>
          </div>
          <div class="cl-3 cl-md-1 py-2">
            <div class="bg-gray b-1 bs-rounded t-white">
              Rounded
            </div>
          </div>
          <div class="cl-3 cl-md-1 py-2">
            <div class="bg-gray b-1 bs-circle s-3 t-white"></div>
          </div>
        </div>
      </section>
      <section>
        <div class="flow justify-content-center align-items-center">
          <div class="cl-12 cl-md-2 mb-3 ml-md-auto t-center">
            <h3>Installation</h3>
            <div v-html="feather.toSvg('package', { 'width': '100%', 'height': '100%' })"></div>
          </div>
          <div class="cl-12 cl-md-9 ml-md-auto pr-md-4">
            <h4>NPM</h4>
            <code-preview :show_preview="false" classes="" identifier="npm_install" lang="sh">
              npm install bento-ui
            </code-preview>
            <h4 class="mt-3">CDN</h4>
            <code-preview :show_preview="false" classes="" identifier="cdn_install" lang="html">
              {{ cdn }}
            </code-preview>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      cdn: 'https://cdn.jsdelivr.net/npm/bento-ui/dist/bento.min.css'
    }
  },

  methods: {
    slideColors (to, rm) {
      // console.log(document.getElementById('colors').children)

      Array.from(document.getElementById('colors').children).forEach(function (item) {
        if (to) item.classList.toggle(to)
        if (rm) {
          if (typeof rm === 'object') {
            item.classList.remove(...rm)
          } else {
            item.classList.remove(rm)
          }
        }
      })
    }
  }
}
</script>

<style>
.docs-feature {
  padding: 32px 0;
}
</style>

