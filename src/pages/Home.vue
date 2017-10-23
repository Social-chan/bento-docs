<template>
  <div id="landing">
    <section class="docs-feature bg-primary t-white plr-5">
      <div class="flow">
        <div class="col demo-icon" v-html="feather.toSvg('anchor')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('camera')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('bell')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('briefcase')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('check-square')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('cloud')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('cpu')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('droplet')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('hash')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('message-circle')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('moon')"></div>
        <div class="col demo-icon" v-html="feather.toSvg('users')"></div>
      </div>
    </section>
    <div class="container">
      <section class="mlr-5">
        <div class="flow align-items-center docs-feature">
          <div class="col-2">
            <img src="../../static/img/bento_ui-logo.svg" alt>
          </div>
          <div class="col-9 ml-4">
            <h3>Bento UI</h3>
            <p class="mb-2">
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
          <div class="col-9 pr-4">
            <h3>Social-chan</h3>
            <p>
              Bento UI is developed and maintained by <a href="https://social-chan.com" target="_blank">Social-chan team</a>,
              and the <a href="https://github.com/Social-chan/Bento/graphs/contributors" target="_blank">GitHub contributors</a>
              a team who was centered on the development of some web projects/services like Social-chan, Dojo, etc
              (and all of the <a href="https://github.com/Social-chan">Social-chan OSS hosted at Github</a>).
            </p>
            <p>
              <strong>Planned:</strong> Bento UI is the future of the Social-chan design (an anime and manga social network).
            </p>
          </div>
          <div class="col-2">
            <img src="../../static/img/socialchan-logo.svg" style="border-radius: 24px" width="256" height="256" alt>
          </div>
        </div>
      </section>
      <section class="mb-5">
        <h2>Discover a new...</h2>

        <h3>Colored UI</h3>
        <div class="flow justify-content-center mb-2 t-center">
          <div class="col bg-primary t-white">
            primary
          </div>
          <div class="col bg-secondary t-white">
            secondary
          </div>
          <div class="col bg-red t-white">
            red
          </div>
          <div class="col bg-black t-white">
            black
          </div>
          <div class="col bg-green t-white">
            green
          </div>
          <div class="col bg-brown t-white">
            brown
          </div>
          <div class="col bg-orange t-white">
            orange
          </div>
          <div class="col bg-purple t-white">
            purple
          </div>
          <div class="col bg-yellow t-white">
            yellow
          </div>
          <div class="col bg-pink t-white">
            pink
          </div>
          <div class="col bg-cyan t-white">
            cyan
          </div>
        </div>

        <div class="flow justify-content-center mb-2 t-center">
          <div class="col bg-darkprimary t-white">
            primary
          </div>
          <div class="col bg-darksecondary t-white">
            secondary
          </div>
          <div class="col bg-darkred t-white">
            red
          </div>
          <div class="col bg-darkblack t-white">
            black
          </div>
          <div class="col bg-darkgreen t-white">
            green
          </div>
          <div class="col bg-darkbrown t-white">
            brown
          </div>
          <div class="col bg-darkorange t-white">
            orange
          </div>
          <div class="col bg-darkpurple t-white">
            purple
          </div>
          <div class="col bg-darkyellow t-white">
            yellow
          </div>
          <div class="col bg-darkpink t-white">
            pink
          </div>
          <div class="col bg-darkcyan t-white">
            cyan
          </div>
        </div>

        <h3 class="mt-4">Sandbox</h3>
        <div class="flow mb-2 t-center">
          <div class="col py-2">
            <div class="bg-secondary b-1 t-white">
              Border
            </div>
          </div>
          <div class="col py-2">
            <div class="bg-secondary b-1 bs-dashed t-white">
              Dashed
            </div>
          </div>
          <div class="col py-2">
            <div class="bg-secondary b-1 bs-dotted t-white">
              Dotted
            </div>
          </div>
          <div class="col py-2">
            <div class="bg-secondary b-1 bs-rounded t-white">
              Rounded
            </div>
          </div>
          <div class="col py-2">
            <div class="bg-secondary b-1 bs-circle s-3 t-white"></div>
          </div>
        </div>
      </section>
      <section>
        <div class="flow justify-content-center align-items-center">
          <div class="col-1 ml-auto t-center">
            <h3>Installation</h3>
            <div v-html="feather.toSvg('package', { 'width': '100%', 'height': '100%' })"></div>
          </div>
          <div class="col-9 ml-auto pr-4">
            <code-preview :show_preview="false" identifier="npm_install" lang="sh">
              npm install bento-ui
            </code-preview>
            <code-preview :show_preview="false" identifier="cdn_install" lang="html">
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
      cdn: 'https://cdn.jsdelivr.net/npm/tadaima@0.6.0/dist/tadaima.min.css'
    }
  },

  methods: {
    parseHTML (v) {
      console.log(v.replace(/&lt;/g, '<').replace(/&gt;/g, '>'))
    }
  }
}
</script>

<style>
.docs-feature {
  padding: 32px 0;
}
</style>

