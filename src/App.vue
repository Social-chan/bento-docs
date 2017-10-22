<template>
  <div id="app">
    <header class="okaeri">
      <h2>Bento UI</h2>
      <p class="tw-light t-1">
        Bento UI is a lightweight, sandbox and technical CSS framework for rapid prototyping any type of application.
      </p>
      <div class="action">
        <a :href="'https://github.com/Social-chan/Bento/archive/bento-' + latest + '.zip'" class="alt primary" role="button"
        v-html="feather.toSvg('download') + ' Download'"></a>
      </div>
      <nav>
        <router-link tag="li" :to="{ name: 'h' }">
          <a>Getting started</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'l' }">
          <a>Layout</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'c' }">
          <a>Components</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'b' }">
          <a>Customize</a>
        </router-link>
      </nav>
    </header>

    <router-view></router-view>

    <footer class="t-white bg-primary">
      <nav>
        <ul>
          <li>
            <a href="#">Follow us</a>
            <ul>
              <li>
                <a href="https://www.facebook.com/socialchan.sn/" target="_blank">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/social_chan" target="_blank">Twitter</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://social-chan.com">Social-chan</a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      latest: null
    }
  },

  mounted () {
    this.fetchRelease()
  },

  methods: {
    fetchRelease () {
      this.$http.get('https://api.github.com/repos/Social-chan/Tadaima/releases').then(response => {
        this.latest = this._.head(response.data).tag_name
      })
    }
  }
}
</script>

<style>
.demo-icon {
  text-align: center;
}

.demo-icon i {
  display: block;
  font-size: 32px;
}

.demo.panel {
  text-align: center;
  font-size: 36px;
}
</style>
