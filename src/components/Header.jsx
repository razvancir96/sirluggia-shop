import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import "./Header.css";
import { logoutUser } from "../store/user/userActions";

const Header = ({ user, signOut, numberOfProducts }) => (
  <header className="border-bottom mb-3">
    <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
      <Link to="/" className="my-3">
        <img src={Logo} alt="Sirluggia Shop" className="logo" />
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
            <Link to="/login" className="text-dark h5 mb-0">
              Logare
            </Link>
          )}
          <div
            className="d-flex align-items-center"
            data-testid="header-cart-section"
          >
            <Link to="/cart" className="d-flex">
              <ShoppingCart className="ml-2" />
              <p className="ml-1 mb-0 text-dark">{numberOfProducts}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
