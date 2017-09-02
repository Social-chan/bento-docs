<template>
  <div id="landing">
    <section class="docs-feature bg-primary text-white plr-5" style="margin-top: -24px">
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
              Bento UI is a CSS framework based in SCSS with a mixed grid (flex and traditional) and tons of
              highly customizable components and utilities that make fast web design prototyping.
            </p>
            <p>
              However it takes some parts of <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a>
              and <a href="http://bulma.io/" target="_blank">Bulma</a>, it has got remixes and several addons
              that make more varied.
            </p>
          </div>
        </div>
        <div class="flow align-items-center docs-feature">
          <div class="col-9 pr-4">
            <h3>Social-chan</h3>
            <p>
              Bento UI is developed by the future design of <a href="https://social-chan.com" target="_blank">Social-chan</a>,
              a social network focused on anime and manga (Japan culture) and centered on the .
            </p>
          </div>
          <div class="col-2">
            <img src="../../static/img/socialchan-logo.svg" style="border-radius: 24px" width="256" height="256" alt>
          </div>
        </div>
      </section>
      <section>
        <div class="flow">
          <div class="col-1 ml-auto text-center">
            <div v-html="feather.toSvg('download-cloud', { 'width': '100%', 'height': 'auto' })"></div>
          </div>
          <div class="col-9 ml-auto pr-4">
            <code-preview :show_preview="false" identifier="npm_install" lang="sh">
              npm install bento-ui
            </code-preview>
            <!-- <code-preview :show_preview="false" identifier="cdn_install" lang="html">
              {{ parseHTML(this.cdn) }}
            </code-preview> -->
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
      cdn: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tadaima@0.6.0/dist/tadaima.min.css" integrity="sha256-RwHO+cDRBjqAPKa4NoGBwbVRMOTJCjQeATDu23TStm0=">'
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

