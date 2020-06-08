import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import { removeFromCart } from "../store/cart/cartActions";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-height: 100px;
`;

const Cart = ({ products, removeFromCartInjected }) => {
  const totalSum = (productList) =>
    productList.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

  return (
    <Layout>
      <div
        className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
      >
        {products.length ? (
          <div className="w-100">
            <div className="d-flex justify-content-between text-center h4 text-bold">
              <p className="w-25">Produs</p>
              <p className="w-25">Pret</p>
              <p className="w-25">Cantitate</p>
              <p className="w-25">Total</p>
            </div>
            {products.map((product) => (
              <div
                className="d-flex justify-content-between align-items-center text-center"
                key={product.id}
              >
                <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                  <ProductImage src={product.image} alt="Produs" />
                  <p>{product.name}</p>
                </div>
                <p className="w-25">
                  {product.price} {product.currency}
                </p>
                <p className="w-25">{product.quantity}</p>
                <div className="w-25 d-flex justify-content-center">
                  <p className="mr-2">
                    {product.price * product.quantity} {product.currency}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeFromCartInjected({ id: product.id })}
                  >
                    <Close />
                  </button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-end border-top">
              <div className="w-25 d-flex align-items-center justify-content-center">
                <Link to="/checkout">
                  <button type="button" className="btn btn-dark">
                    Plătește
                  </button>
                </Link>
              </div>
              <div className="w-25">
                <p className="my-4 text-center text-bold">
                  {totalSum(products)} {products[0].currency}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <p className="h3">Nu ai produse în coș!</p>
            <Link to="/">
              <button type="submit" className="btn btn-outline-dark">
                Inapoi la home
              </button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    products: state.cart.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCartInjected: (payload) => dispatch(removeFromCart(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
