<template>
  <pzz-item-content :type="contentType" :title="contentTitle">
    <pzz-radio-button
      v-for="(d, index) in dough"
      :key="d.name"
      :idx="index"
      :value="d"
      :name="d.name"
      :type="contentType"
      @change="$emit('selectDoug', $event)"
    />
  </pzz-item-content>
</template>

<script>
import PzzItemContent from "../../../common/components/ItemContent";
import PzzRadioButton from "../../../common/components/RadioButton";

export default {
  name: "PzzBuilderDoughSelector",
  props: {
    dough: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PzzRadioButton,
    PzzItemContent,
  },
  data() {
    return {
      contentType: "dough",
      contentTitle: "Выберите тесто",
    };
  },
};
</script>
