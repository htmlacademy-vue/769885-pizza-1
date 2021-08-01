<template>
  <div id="app">
    <pzz-app-layout />
  </div>
</template>

<script>
import PzzAppLayout from "./layouts/AppLayout";

export default {
  name: "App",
  components: { PzzAppLayout },
};
</script>

<style lang="scss">
@import "../src/assets/scss/app";
</style>
