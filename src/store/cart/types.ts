export interface addToCartPayload {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
}

export interface removeFromCartPayload {
  id: number;
}

export interface addToCartAction {
  type: 'ADD_TO_CART',
  payload: addToCartPayload
}

export interface removeFromCartAction {
  type: "REMOVE_FROM_CART",
  payload: removeFromCartPayload
}
