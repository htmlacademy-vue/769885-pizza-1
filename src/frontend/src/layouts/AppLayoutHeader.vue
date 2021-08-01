<template>
  <header class="header">
    <div class="header__logo">
      <a href="#" class="logo">
        <img
          src="../assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>
    <pzz-header-card />
    <pzz-header-user />
  </header>
</template>

<script>
import PzzHeaderCard from "../modules/header/components/HeaderCard";
import PzzHeaderUser from "../modules/header/components/HeaderUser";
export default {
  name: "PzzAppLayoutHeader",
  components: {
    PzzHeaderUser,
    PzzHeaderCard,
  },
};
</script>
