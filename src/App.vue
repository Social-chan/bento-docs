<template>
  <router-view></router-view>
</template>

<script>
feather.replace()

// Anchor
anchors.options = {
  placement: 'left',
  icon: "#"
}
anchors.add('h2[id]')

// Code highlight and clipboard
$('.highlight').each(function () {
  var btnHtml = '<a href="javascript:;" class="docs-clipboard tooltip-top" aria-label="Copy code"><i class="icon-alt-clipboard"></i></a>'
  $(this).prepend(btnHtml)
})

new Clipboard('.docs-clipboard', {
  target: function(trigger) {
    return $(trigger).closest('.highlight').find('code').get(0)
  }
})

export default {
  name: 'app'
}
</script>

<style>
.anchorjs-link {
  transition: all .25s linear;
}

*:hover > .anchorjs-link {
  margin-left: -1.125em !important;
}

figure.highlight {
  margin: 4px 0px;
  padding: 16px;
  border-radius: 8px;
  background-color: #eee;
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
