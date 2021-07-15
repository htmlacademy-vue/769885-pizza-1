<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <pzz-sheet-content>
        <pzz-radio-button :value-array="sizes" />
      </pzz-sheet-content>
    </div>
  </div>
</template>

<script>
import pizza from "../../static/pizza.json";
import { findSize } from "../../common/helpers";
import PzzRadioButton from "../../common/components/RadioButton";
import PzzSheetContent from "../../common/components/SheetContent";

export default {
  name: "PzzBuilderSizeSelector",
  components: {
    PzzSheetContent,
    PzzRadioButton,
  },
  data() {
    return {
      sizes: pizza.sizes.map((item) => findSize(item)),
    };
  },
};
</script>
