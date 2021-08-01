<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>
      <pzz-builder-dough-selector @selectDoug="selectDoug" :dough="dough" />
      <pzz-builder-size-selector @selectSize="selectSize" :sizes="size" />
      <pzz-builder-ingredients-selector
        @setIngredients="setIngredients"
        @selectSauce="selectSauce"
        :sauces="sauce"
        :ingredients="ingredients"
      />
      <pzz-builder-result-pizza
        :currentComponentPizza="currentComponentPizza"
        :counterIngredients="counterIngredients"
        @input="pizzaName"
        :total="totalSum"
        :isButton="isButtonCreate"
      />
    </div>
  </form>
</template>

<script>
import PzzBuilderDoughSelector from "../modules/builder/components/BuilderDoughSelector";
import PzzBuilderSizeSelector from "../modules/builder/components/BuilderSizeSelector";
import PzzBuilderIngredientsSelector from "../modules/builder/components/BuilderIngredientsSelector";
import PzzBuilderResultPizza from "../modules/builder/components/BuilderResultPizza";
import { SIZE } from "../common/enum/diameterSize";
import { DOUNGH, SAUCE } from "../common/constants";
import pizza from "../static/pizza.json";
import {
  findIngredient,
  findSize,
  findDoungh,
  findSouse,
} from "../common/helpers";

export default {
  name: "PzzIndexHome",
  components: {
    PzzBuilderResultPizza,
    PzzBuilderIngredientsSelector,
    PzzBuilderSizeSelector,
    PzzBuilderDoughSelector,
  },
  data() {
    return {
      currentSize: SIZE[1],
      currentDough: DOUNGH[0].value,
      currentSauce: SAUCE[0].value,
      currentIngredients: [],
      ingredients: pizza.ingredients.map((item) => findIngredient(item)),
      size: pizza.sizes.map((item) => findSize(item)),
      dough: pizza.dough.map((item) => findDoungh(item)),
      sauce: pizza.sauces.map((item) => findSouse(item)),
      resultPizzaName: "",
    };
  },
  methods: {
    selectSize(val) {
      this.currentSize = val;
    },
    selectDoug(val) {
      this.currentDough = val;
    },
    selectSauce(val) {
      this.currentSauce = val;
    },
    selectIngredients(counter, index) {
      const ingredient = { ...this.ingredients[index], counter };
      this.ingredients.splice(index, 1, ingredient);
    },
    setIngredients(val) {
      const index = this.ingredients.findIndex((el) => val.name === el.name);
      const counter = val.setting === "plus" ? val.counter++ : val.counter--;
      this.selectIngredients(counter, index);
    },
    pizzaName(val) {
      this.resultPizzaName = val;
    },
  },
  computed: {
    counterIngredients() {
      return this.ingredients.filter((i) => i.counter > 0);
    },
    currentComponentPizza() {
      return Object.assign({
        size: this.currentSize,
        dough: this.currentDough,
        sauce: this.currentSauce,
      });
    },
    totalSum() {
      const dough = this.dough.find((it) => it.type === this.currentDough);
      const sauce = this.sauce.find((it) => it.type === this.currentSauce);
      const size = this.size.find((it) => it.type === this.currentSize);
      const sumIngredients = this.counterIngredients.reduce((a, i) => {
        a += i.counter * i.price;
        return a;
      }, 0);
      return (dough.price + sauce.price + sumIngredients) * size.multiplier;
    },
    isButtonCreate() {
      return !(this.counterIngredients.length && this.resultPizzaName);
    },
    currentResultPizza() {
      return Object.assign({
        name: this.resultPizzaName,
        size: this.currentSize,
        dough: this.currentDough,
        sauce: this.currentSauce,
        ingredients: this.counterIngredients,
        total: this.totalSum,
      });
    },
  },
};
</script>
