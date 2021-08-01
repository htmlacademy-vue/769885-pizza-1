<template>
  <div :class="`content__${type}`">
    <div class="sheet">
      <h2 class="title title--small sheet__title">{{ title }}</h2>
      <div :class="`sheet__content ${type}`">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PzzItemContent",
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Сделайте выбор",
    },
  },
};
</script>
