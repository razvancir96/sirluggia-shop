interface productPayload {
  id: string;
  name: string;
  price: number;
  currency: number;
  image: string;
}
export interface addToCartPayload {
  product: productPayload;
}

export interface removeFromCartPayload {
  id: string;
}

export interface addToCartAction {
  type: "ADD_TO_CART";
  payload: addToCartPayload;
}

export interface removeFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: removeFromCartPayload;
}

interface product extends productPayload {
  quantity: number;
}

export interface cartState {
  products: product[];
}

export type cartAction = addToCartAction | removeFromCartAction;
