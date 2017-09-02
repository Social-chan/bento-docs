<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
