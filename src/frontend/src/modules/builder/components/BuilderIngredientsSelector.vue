<template>
  <pzz-item-content :type="contentType" :title="contentTitle">
    <div class="ingridients__sauce">
      <p>Основной соус:</p>
      <pzz-radio-button
        v-for="(s, index) in sauces"
        :key="s.name"
        :idx="index"
        :value="s"
        :type="contentType"
        class="radio"
        @change="$emit('selectSauce', $event)"
      />
    </div>
    <div class="ingridients__filling">
      <p>Начинка:</p>
      <ul class="ingridients__list">
        <pzz-item-counter
          v-for="ingredient in ingredients"
          :key="ingredient.name"
          :ingredient="ingredient"
          @change="$emit('setIngredients', $event)"
        />
      </ul>
    </div>
  </pzz-item-content>
</template>

<script>
import PzzItemCounter from "../../../common/components/ItemCounter";
import PzzItemContent from "../../../common/components/ItemContent";
import PzzRadioButton from "../../../common/components/RadioButton";

export default {
  name: "PzzBuilderIngredientsSelector",
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
    sauces: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PzzRadioButton,
    PzzItemContent,
    PzzItemCounter,
  },
  data() {
    return {
      contentType: "ingridients",
      contentTitle: "Выберите ингридиенты",
    };
  },
};
</script>
