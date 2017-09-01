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

.hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #F0F0F0
}

.hljs,
.hljs-subst {
    color: #444
}

.hljs-comment {
    color: #888888
}

.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-name {
    font-weight: bold
}

.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
    color: #880000
}

.hljs-title,
.hljs-section {
    color: #880000;
    font-weight: bold
}

.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
    color: #BC6060
}

.hljs-literal {
    color: #78A960
}

.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
    color: #397300
}

.hljs-meta {
    color: #1f7199
}

.hljs-meta-string {
    color: #4d99bf
}

.hljs-emphasis {
    font-style: italic
}

.hljs-strong {
    font-weight: bold
}
</style>
