<template>
  <div id="app">
    <header class="okaeri">
      <h2>Tadaima</h2>
      Tadaima is a pure CSS framework based on modern components and highly customizable with mixes.
      <div class="action">
        <a href="https://github.com/Social-chan/Tadaima/archive/tadaima-v0.6.0.zip" class="primary text-white" role="button"
        v-html="feather.toSvg('download') + ' Download'"></a>
      </div>
      <nav>
        <router-link tag="li" :to="{ name: 'home' }">
          <a>Getting started</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'components' }">
          <a>Components</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'mixes' }">
          <a>Mixes</a>
        </router-link>
      </nav>
    </header>

    <router-view></router-view>

    <footer>
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

  mounted () {
    this.anchors.options = {
      placement: 'left',
      icon: '#'
    }
    this.anchors.add('h2[id]')
  }
}
</script>

<style>
.anchorjs-link {
  transition: all .25s linear;
}

*:hover > .anchorjs-link {
  margin-left: -1.125em !important;
}

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

.docs-clipboard {
  float: right;
  color: #000;
}
</style>
