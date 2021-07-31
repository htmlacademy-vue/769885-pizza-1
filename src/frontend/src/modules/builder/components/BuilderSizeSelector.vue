<template>
  <pzz-item-content :type="contentType" :title="contentTitle">
    <pzz-radio-button
      v-for="(size, index) in sizes"
      :key="size.name"
      :idx="index"
      :value="size"
      :type="contentType"
      @change="$emit('selectSize', $event)"
    />
  </pzz-item-content>
</template>

<script>
import pizza from "../../../static/pizza.json";
import { findSize } from "../../../common/helpers";
import PzzRadioButton from "../../../common/components/RadioButton";
import PzzItemContent from "../../../common/components/ItemContent";

export default {
  name: "PzzBuilderSizeSelector",
  components: {
    PzzItemContent,
    PzzRadioButton,
  },
  data() {
    return {
      sizes: pizza.sizes.map((item) => findSize(item)),
      contentType: "diameter",
      contentTitle: "Выберите размер",
    };
  },
};
</script>
