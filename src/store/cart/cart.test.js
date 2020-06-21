import cartReducer from "./cartReducer";
import { addToCart, removeFromCart } from "./cartActions";

const initialState = {
  products: [],
};

const product1 = {
  id: 1,
  name: "Cool shirt",
  price: 2345,
  currency: "Lei",
  image: "randomImage1",
};

const product2 = {
  id: 2,
  name: "Cool pants",
  price: 123,
  currency: "Lei",
  image: "randomImage2",
};

describe("add to cart", () => {
  test("first call", () => {
    const resultedState = cartReducer(undefined, {});

    expect(resultedState).toEqual(initialState);
  });

  test("add product that is not in the cart", () => {
    const action = addToCart({ product: product1 });

    const resultedState = cartReducer(initialState, action);

    expect(resultedState.products.length).toBe(1);
    expect(resultedState.products[0]).toEqual({ ...product1, quantity: 1 });
  });

  test("add the same product in cart twice", () => {
    const addProduct1 = addToCart({ product: product1 });

    const stateOne = cartReducer(initialState, addProduct1);
    const stateTwo = cartReducer(stateOne, addProduct1);

    expect(stateTwo.products.length).toBe(1);
    expect(stateTwo.products[0]).toEqual({ ...product1, quantity: 2 });
  });

  test("add multiple different products", () => {
    const addProduct1 = addToCart({ product: product1 });
    const addProduct2 = addToCart({ product: product2 });

    const stateOne = cartReducer(initialState, addProduct1);
    const stateTwo = cartReducer(stateOne, addProduct2);

    expect(stateTwo.products.length).toBe(2);
    expect(stateTwo.products[0]).toEqual({ ...product1, quantity: 1 });
    expect(stateTwo.products[1]).toEqual({ ...product2, quantity: 1 });
  });
});

describe("remove from cart", () => {
  test("remove unexisting product", () => {
    const removeProduct1 = removeFromCart({ id: 1 });

    const state = cartReducer(initialState, removeProduct1);

    expect(state).toEqual(initialState);
  });

  test("remove existing product", () => {
    const addProduct1 = addToCart({ product: product1 });
    const removeProduct1 = removeFromCart({ id: 1 });

    const productOneAdded = cartReducer(initialState, addProduct1);
    const productOneRemoved = cartReducer(productOneAdded, removeProduct1);

    expect(productOneRemoved).toEqual(initialState);
  });
});
