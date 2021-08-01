<template>
  <span>{{ value.name }}</span>
</template>

<script>
export default {
  name: "PzzSelectorItem",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>
