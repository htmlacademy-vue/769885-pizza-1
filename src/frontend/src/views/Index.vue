<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>
      <pzz-builder-dough-selector />
      <pzz-builder-size-selector />
      <pzz-builder-ingredients-selector />
      <pzz-builder-result-pizza />
    </div>
  </form>
</template>

<script>
import PzzBuilderDoughSelector from "../modules/builder/BuilderDoughSelector";
import PzzBuilderSizeSelector from "../modules/builder/BuilderSizeSelector";
import PzzBuilderIngredientsSelector from "../modules/builder/BuilderIngredientsSelector";
import PzzBuilderResultPizza from "../modules/builder/BuilderResultPizza";

export default {
  name: "PzzIndexHome",
  components: {
    PzzBuilderResultPizza,
    PzzBuilderIngredientsSelector,
    PzzBuilderSizeSelector,
    PzzBuilderDoughSelector,
  },
};
</script>
