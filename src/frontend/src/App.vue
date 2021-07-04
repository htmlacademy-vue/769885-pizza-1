<template>
  <div id="app">
    <pzz-index />
  </div>
</template>

<script>
import PzzIndex from "@/views/Index.vue";

export default {
  name: "App",
  components: { PzzIndex },
};
</script>

<style lang="scss">
@import "../src/assets/scss/app";
</style>
