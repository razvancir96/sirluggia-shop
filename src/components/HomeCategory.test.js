import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeCategory from "./HomeCategory";
import renderWithRouter from "../utils/test-utils";

const fakeProps = {
  route: "shoes",
  name: "The shoes",
  description: "They are lit",
  image: "random",
};

test("component information is displayed", () => {
  // eslint-disable-next-line
  renderWithRouter(<HomeCategory {...fakeProps} />);

  expect(screen.getByAltText(fakeProps.name)).toBeTruthy();
  expect(screen.getByText(fakeProps.name)).toBeTruthy();
  expect(screen.getByText(fakeProps.description)).toBeTruthy();
});

describe("click on subcomponents redirects to corresponding route", () => {
  let history;

  beforeEach(() => {
    // eslint-disable-next-line
    history = renderWithRouter(<HomeCategory {...fakeProps} />).history;
  });

  test("click on image redirects to corresponding route", () => {
    fireEvent.click(screen.getByAltText(fakeProps.name));
    expect(history.location.pathname).toBe(`/category/${fakeProps.route}`);
  });

  test("click on title redirects to corresponding route", () => {
    fireEvent.click(screen.getByText(fakeProps.name));
    expect(history.location.pathname).toBe(`/category/${fakeProps.route}`);
  });

  test("click on description redirects to corresponding route", () => {
    fireEvent.click(screen.getByText(fakeProps.description));
    expect(history.location.pathname).toBe(`/category/${fakeProps.route}`);
  });
});
