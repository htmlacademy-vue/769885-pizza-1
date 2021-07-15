<template>
  <div class="app-layout">
    <pzz-app-layout-header />
    <main class="content">
      <pzz-index-home />
    </main>
  </div>
</template>
<script>
import PzzAppLayoutHeader from "./AppLayoutHeader";
import PzzIndexHome from "../views/Index";
export default {
  name: "PzzAppLayout",
  components: {
    PzzIndexHome,
    PzzAppLayoutHeader,
  },
};
</script>
