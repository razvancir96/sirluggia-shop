import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import LogoSvg from "../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";

import { logoutUser } from "../store/user/userActions";
import Container from "../utils/style-utils";

const Logo = styled.img`
  width: 150px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ user, signOut, numberOfProducts }) => (
  <header className="border-bottom mb-3">
    <Container className="d-flex justify-content-between align-items-center">
      <Link to="/" className="my-3">
        <Logo src={LogoSvg} alt="Sirluggia Shop" />
      </Link>
      <div>
        {user && (
          <p>
            Salut,
            {user.displayName}!
          </p>
        )}
        <div className="d-flex justify-content-end">
          {user ? (
            <button
              type="button"
              className="logout h5"
              onClick={() => signOut()}
            >
              Delogare
            </button>
          ) : (
            <Link to="/login" className="h5 mb-0">
              Logare
            </Link>
          )}
          <div
            className="d-flex align-items-center"
            data-testid="header-cart-section"
          >
            <Link to="/cart" className="d-flex">
              <ShoppingCart className="ml-2" />
              <p className="ml-1 mb-0">{numberOfProducts}</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </header>
);

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
