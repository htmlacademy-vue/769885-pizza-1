<template>
  <pzz-app-drag :draggable="ingredientCounter < 3" :transfer-data="ingredient">
    <li class="ingridients__item">
      <span class="filling" :class="`filling--${ingredient.type}`">
        {{ ingredient.name }}
      </span>
      <div class="counter counter--orange ingridients__counter">
        <button
          type="button"
          class="counter__button counter__button--minus"
          :disabled="minusIngredientCounter"
          @click="minusCounter('minus')"
        >
          <span class="visually-hidden">Меньше</span>
        </button>
        <input
          type="text"
          name="counter"
          class="counter__input"
          v-model="ingredientCounter"
          readonly
        />
        <button
          type="button"
          class="counter__button counter__button--plus"
          :disabled="plusIngredientCounter"
          @click="plusCounter('plus')"
        >
          <span class="visually-hidden">Больше</span>
        </button>
      </div>
    </li>
  </pzz-app-drag>
</template>

<script>
import PzzAppDrag from "./AppDrag";
export default {
  name: "PzzItemContent",
  components: { PzzAppDrag },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ingredientCounter: 0,
    };
  },
  computed: {
    minusIngredientCounter() {
      return this.ingredientCounter <= 0;
    },
    plusIngredientCounter() {
      return this.ingredientCounter >= 3;
    },
  },
  methods: {
    minusCounter(setting) {
      this.ingredientCounter--;
      this.$emit("change", {
        setting: setting,
        type: this.ingredient.type,
        name: this.ingredient.name,
        counter: this.ingredientCounter,
        price: this.ingredient.price,
      });
    },
    plusCounter(setting) {
      this.ingredientCounter++;
      this.$emit("change", {
        setting: setting,
        type: this.ingredient.type,
        name: this.ingredient.name,
        counter: this.ingredientCounter,
        price: this.ingredient.price,
      });
    },
  },
};
</script>
