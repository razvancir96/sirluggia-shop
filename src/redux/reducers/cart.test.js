import cartReducer from "./cart";

const initialState = {
  products: [],
};

const actionTypes = {
  random: "random",
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
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
  test("first call with no valid action", () => {
    const action = {
      type: actionTypes.random,
    };

    const resultedState = cartReducer(undefined, action);

    expect(resultedState).toEqual(initialState);
  });

  test("add product that is not in the cart", () => {
    const action = {
      type: actionTypes.addToCart,
      payload: {
        product: product1,
      },
    };

    const resultedState = cartReducer(initialState, action);

    expect(resultedState.products.length).toBe(1);
    expect(resultedState.products[0]).toEqual({ ...product1, quantity: 1 });
  });

  test("add the same product in cart twice", () => {
    const addProduct1 = {
      type: actionTypes.addToCart,
      payload: {
        product: product1,
      },
    };

    const stateOne = cartReducer(initialState, addProduct1);
    const stateTwo = cartReducer(stateOne, addProduct1);

    expect(stateTwo.products.length).toBe(1);
    expect(stateTwo.products[0]).toEqual({ ...product1, quantity: 2 });
  });

  test("add multiple different products", () => {
    const addProduct1 = {
      type: actionTypes.addToCart,
      payload: {
        product: product1,
      },
    };
    const addProduct2 = {
      type: actionTypes.addToCart,
      payload: {
        product: product2,
      },
    };

    const stateOne = cartReducer(initialState, addProduct1);
    const stateTwo = cartReducer(stateOne, addProduct2);

    expect(stateTwo.products.length).toBe(2);
    expect(stateTwo.products[0]).toEqual({ ...product1, quantity: 1 });
    expect(stateTwo.products[1]).toEqual({ ...product2, quantity: 1 });
  });
});
