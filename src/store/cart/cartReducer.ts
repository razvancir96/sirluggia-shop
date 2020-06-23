import { cartAction, cartState } from "./types";

const initialState: cartState = {
  products: [],
};

export default function cartReducer(
  state = initialState,
  action: cartAction
): cartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      let productInCart = false;
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.product.id) {
          productInCart = true;
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      if (!productInCart) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload.product,
              quantity: 1,
            },
          ],
        };
      }
      return { ...state, products: updatedProducts };
    }
    case "REMOVE_FROM_CART": {
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      return { ...state, products: filteredProducts };
    }
    default:
      return state;
  }
}
