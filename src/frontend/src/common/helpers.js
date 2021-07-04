import { DOUNGH, INGREDIENTS, SAUCE, SIZE } from "./dictionary-type";

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
