<template>
  <div class="">
    <label
      v-for="(val, index) in valueArray"
      :key="val.name"
      class="diameter__input"
      :class="`diameter__input--${val.type}`"
    >
      <input
        type="radio"
        name="diameter"
        :value="val.type"
        class="visually-hidden"
        :checked="index === 1"
      />
      <span>{{ val.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "PzzRadioButton",
  props: {
    valueArray: {
      type: Array,
      required: true,
    },
  },
};
</script>
