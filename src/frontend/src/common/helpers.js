import { DOUNGH, INGREDIENTS, SAUCE } from "./constants";
import { SIZE } from "./enum/diameterSize";

export const findDoungh = (item) => {
  return {
    ...item,
    type: DOUNGH.find(({ name }) => item.name === name)?.value,
  };
};
export const findIngredient = (item) => {
  return {
    ...item,
    type: INGREDIENTS.find(({ name }) => item.name === name)?.value,
  };
};
export const findSouse = (item) => {
  return {
    ...item,
    type: SAUCE.find(({ name }) => item.name === name)?.value,
  };
};
export const findSize = (item) => {
  return {
    ...item,
    type: SIZE[item.multiplier],
  };
};

export const findPizzaItem = (item) => {
  return `<div class="pizza__filling pizza__filling--${item}"></div>`;
};
