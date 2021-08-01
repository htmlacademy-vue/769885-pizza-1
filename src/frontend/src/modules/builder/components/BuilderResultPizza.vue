<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="$emit('input', $event.target.value.trim())"
      />
    </label>

    <div class="content__constructor">
      <pzz-app-drop
        @drop="
          $emit('drop', { type: $event.type, counter: $event.counter + 1 })
        "
      >
        <div
          :class="`pizza pizza--foundation--${dough()}-${
            currentComponentPizza.sauce
          }`"
        >
          <div class="pizza__wrapper">
            <template v-for="(i, idx) in counterIngredients">
              <div
                :key="`${idx}--1`"
                :class="`pizza__filling pizza__filling--${i.type}`"
              ></div>
              <div
                v-if="i.counter > 1"
                :key="`${idx}--2`"
                :class="`pizza__filling pizza__filling--${i.type} pizza__filling--second`"
              />
              <div
                v-if="i.counter > 2"
                :key="`${idx}--3`"
                :class="`pizza__filling pizza__filling--${i.type} pizza__filling--third`"
              />
            </template>
          </div>
        </div>
      </pzz-app-drop>
    </div>

    <div class="content__result">
      <p>Итого: {{ total }} ₽</p>
      <button
        type="button"
        class="button button--disabled"
        :disabled="isButton"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import PzzAppDrop from "../../../common/components/AppDrop";
export default {
  name: "PzzBuilderResultPizza",
  components: { PzzAppDrop },
  props: {
    counterIngredients: {
      type: Array,
      default: () => [],
    },
    currentComponentPizza: {
      type: Object,
      required: true,
    },
    total: {
      type: Number,
    },
    isButton: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    dough() {
      return this.currentComponentPizza.dough === "light" ? "small" : "big";
    },
  },
};
</script>
