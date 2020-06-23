import {
  addToCartPayload,
  addToCartAction,
  removeFromCartPayload,
  removeFromCartAction,
} from "./types";

export function addToCart(payload: addToCartPayload): addToCartAction {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export function removeFromCart(
  payload: removeFromCartPayload
): removeFromCartAction {
  return {
    type: "REMOVE_FROM_CART",
    payload,
  };
}
