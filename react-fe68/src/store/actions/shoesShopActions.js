// import {
//   ADD_TO_SHOPPING_LIST,
//   UPDATE_QUANTITY,
//   REMOVE_FROM_SHOPPING_LIST,
// } from "../constants/shoeShopConstant";

import * as shoesShopConstants from "../constants/shoeShopConstant";
export const actAddToShoppingList = (shoe) => {
  return {
    type: shoesShopConstants.ADD_TO_SHOPPING_LIST,
    payload: shoe,
  };
};

export const actUpdateQuantity = (id, type) => {
  return {
    type: shoesShopConstants.UPDATE_QUANTITY,
    payload: { id, type },
  };
};

export const actRemoveFromShoppingList = (id) => ({
  type: shoesShopConstants.REMOVE_FROM_SHOPPING_LIST,
  payload: id,
});

// export const actAddToShoppingList = shoe => ({

// });
// ({}) là return về obj
// {} là return về scope của func
