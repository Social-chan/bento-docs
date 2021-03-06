<template>
  <div class="docs-preview">
    <div :id="identifier">
      <slot></slot>
    </div>
    <pre v-if="show_code" :class="classes" v-highlightjs="code"><code :id="identifier + '_code'" :class="lang"></code></pre>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  props: {
    show_preview: {
      type: Boolean,
      required: false,
      default: true
    },
    show_code: {
      type: Boolean,
      required: false,
      default: true
    },
    classes: {
      type: String,
      required: false,
      default: 'mt-3 mb-5'
    },
    identifier: String,
    lang: String
  },

  data () {
    return {
      code: ''
    }
  },

  mounted () {
    var el = document.getElementById(this.identifier)

    this.code = this.beautify(el.innerHTML, {
      indent_size: 2
    })

    var nextEl = el.nextElementSibling
    var newEl = document.createElement('a')

    // Set attributes for the new element
    newEl.setAttribute('href', 'javascript:;')
    newEl.setAttribute('class', 'docs-clipboard t-black')
    newEl.setAttribute('id', this.identifier + '_btn')
    newEl.setAttribute('data-clipboard-target', '#' + this.identifier + '_code')
    newEl.innerHTML = this.feather.toSvg('clipboard')

    nextEl.appendChild(newEl)

    /* eslint-disable no-new */
    new Clipboard('#' + this.identifier + '_btn')
    /* eslint-enable no-new */

    if (this.show_preview === false) {
      el.removeChild(el.firstChild)
    }
  }
}
</script>

<style>
pre {
  position: relative;
  overflow-x: hidden;
}

.docs-clipboard {
  position: absolute;
  top: 6px;
  right: 6px;
}

.docs-clipboard svg {
  width: 16px;
  height: 16px;
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
