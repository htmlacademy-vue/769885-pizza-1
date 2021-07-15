<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="(d, idx) in dough"
          :key="d.name"
          class="dough__input"
          :class="`dough__input--${d.type}`"
        >
          <input
            type="radio"
            name="dough"
            :value="d.type"
            class="visually-hidden"
            :checked="idx === 0"
          />
          <b>{{ d.name }}</b>
          <span>{{ d.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import pizza from "../../static/pizza.json";
import { findDoungh } from "../../common/helpers";
export default {
  name: "PzzBuilderDoughSelector",
  data() {
    return {
      dough: pizza.dough.map((item) => findDoungh(item)),
    };
  },
};
</script>
