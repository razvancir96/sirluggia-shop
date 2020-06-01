import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouterAndStore } from "../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import ProductItem from "./ProductItem";
import Header from "./Header";

const props = {
  id: 1,
  name: "Cool shirt",
  price: 2345,
  currency: "Lei",
  image: "randomImage1",
};

test("component information is displayed", () => {
  renderWithRouterAndStore(<ProductItem {...props} />);

  expect(screen.getByAltText(props.name)).toBeTruthy();
  expect(screen.getByText(props.name)).toBeTruthy();
  expect(screen.getByTestId("price-section")).toHaveTextContent(props.price);
  expect(screen.getByTestId("price-section")).toHaveTextContent(props.currency);
  expect(screen.getByText("Adaugă în coș")).toBeTruthy();
});

describe("component information(except add to cart button) redirects to new route", () => {
  let history;

  beforeEach(() => {
    history = renderWithRouterAndStore(<ProductItem {...props} />).history;
  });

  test("click on image redirects to corresponding route", () => {
    fireEvent.click(screen.getByAltText(props.name));
    expect(history.location.pathname).toBe(`/product/${props.id}`);
  });

  test("click on title redirects to corresponding route", () => {
    fireEvent.click(screen.getByText(props.name));
    expect(history.location.pathname).toBe(`/product/${props.id}`);
  });

  test("click on description redirects to corresponding route", () => {
    fireEvent.click(screen.getByTestId("price-section"));
    expect(history.location.pathname).toBe(`/product/${props.id}`);
  });
});

test("click on add to cart button adds product to cart", () => {
  renderWithRouterAndStore(<Header />);
  renderWithRouterAndStore(<ProductItem {...props} />);

  expect(screen.getByTestId("header-cart-section")).toHaveTextContent("0");

  fireEvent.click(screen.getByText("Adaugă în coș"));

  expect(screen.getByTestId("header-cart-section")).toHaveTextContent("1");
});
