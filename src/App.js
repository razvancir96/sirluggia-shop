import React from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }

  body a {
    color: black;
  }

  body a:hover {
    color: black;
  }
`;

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about" component={About} />
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
