import { createSelector } from "reselect";

const selectShop = state => state.shopData;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)