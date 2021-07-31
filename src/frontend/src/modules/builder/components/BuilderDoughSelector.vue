<template>
  <pzz-item-content :type="contentType" :title="contentTitle">
    <pzz-radio-button
      v-for="(d, index) in dough"
      :key="d.name"
      :idx="index"
      :value="d"
      :type="contentType"
      @change="$emit('selectDoug', $event)"
    />
  </pzz-item-content>
</template>

<script>
import pizza from "../../../static/pizza.json";
import { findDoungh } from "../../../common/helpers";
import PzzItemContent from "../../../common/components/ItemContent";
import PzzRadioButton from "../../../common/components/RadioButton";
export default {
  name: "PzzBuilderDoughSelector",
  components: {
    PzzRadioButton,
    PzzItemContent,
  },
  data() {
    return {
      dough: pizza.dough.map((item) => findDoungh(item)),
      contentType: "dough",
      contentTitle: "Выберите тесто",
    };
  },
};
</script>
