<template>
  <label :class="`${type}__input ${type}__input--${value.type}`">
    <input
      type="radio"
      :name="`${type}`"
      :value="value.type"
      class="visually-hidden"
      :checked="idx === 0"
      @change="$emit('change', $event.target.value)"
    />
    <b v-if="value.description">{{ value.name }}</b>
    <span v-if="value.description">{{ value.description }}</span>
    <pzz-selector-item v-else :value="value" />
  </label>
</template>

<script>
import PzzSelectorItem from "./SelectorItem";

export default {
  name: "PzzRadioButton",
  components: {
    PzzSelectorItem,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
