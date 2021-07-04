<template>
  <div id="app">
    <ptz-main />
  </div>
</template>

<script>
import PtzMain from "@/views/Index.vue";

export default {
  name: "App",
  components: { PtzMain },
};
</script>

<style lang="scss">
@import "../src/assets/scss/app";
</style>
