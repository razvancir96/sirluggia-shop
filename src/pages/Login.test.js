jest.mock("../apis/firebase/firebase");

import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouterAndStore } from "../utils/test-utils";
import App from "../App";

test("user succesfully logs in", async () => {
  renderWithRouterAndStore(<App />);

  fireEvent.click(screen.getByText("Logare"));

  await waitFor(() => screen.getByText("Loghează-te cu Google"));

  fireEvent.click(screen.getByText("Loghează-te cu Google"));

  await waitFor(() => screen.getByTestId("header"));

  const Header = screen.getByTestId("header");
  expect(Header).toHaveTextContent("Delogare");
  expect(Header).toHaveTextContent("Salut,");
});
