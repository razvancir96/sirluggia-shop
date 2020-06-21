interface productPayload {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
}
export interface addToCartPayload {
  product: productPayload
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

interface product extends productPayload {
  quantity: number
}

export interface cartState {
  products: product[]
}

export type cartAction = addToCartAction | removeFromCartAction