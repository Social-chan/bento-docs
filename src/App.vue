<template>
  <div id="app">
    <header class="bg-red pt-5">
      <div class="container">
        <h1 class="d-inline-block t-white mb-2">
          <mark>Bento UI</mark>
        </h1>
        <div>
          <span class="t-2 tw-light t-white">
            <mark>
              Bento UI is a lightweight, sandbox and technical CSS framework for rapid prototyping any type of application.
            </mark>
          </span>
        </div>
        <div class="flow justify-content-center mx-4">
          <a
            :href="'https://github.com/Social-chan/Bento/releases/download/'+latest+'/bento-'+latest.replace('v', '')+'.zip'"
            class="bg-black is-hoverable t-white px-2 py-3 t-2" role="button"
            v-html="feather.toSvg('download') + ' Download'">
          </a>
        </div>
        <tabs-menu :root="menu"></tabs-menu>
      </div>
    </header>

    <router-view></router-view>

    <!-- <footer class="t-white bg-primary">
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
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      menu: {
        class: 'is-hoverable mr-1 p-2 bs-top-rounded',
        activeClass: 'bg-white t-red',
        items: [
          {
            content: 'Getting started',
            route: { name: 'h' }
          },
          {
            content: 'Reference',
            route: { name: 'ref' }
          },
          {
            content: 'Components',
            route: { name: 'c' }
          },
          {
            content: 'Customize',
            route: { name: 'b' }
          }
        ]
      },
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
