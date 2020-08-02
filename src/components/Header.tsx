import React from "react";
import { Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import LogoSvg from "../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";

import { logoutUser } from "../store/user/userActions";
import Container from "../utils/style-utils";
import { rootState } from "../store";

const StyledHeader = styled.header.attrs({
  className: "border-bottom mb-3",
})``;

const ContentContainer = styled(Container).attrs({
  className: "d-flex justify-content-between align-items-center",
})``;

const Logo = styled.img`
  width: 150px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const RightOptionsContainer = styled.div.attrs({
  className: "d-flex justify-content-end",
})``;

const LogoLink = styled(Link).attrs({
  className: "my-3",
})``;

const LogoutButton = styled.button.attrs({
  className: "h5 btn",
})`
  font-weight: bold;
`;

const LoginLink = styled(Link).attrs({
  className: "h5 mb-0",
})``;

const CartSection = styled.div.attrs({
  className: "d-flex align-items-center",
})``;

const CartLink = styled(Link)`
  display: flex;
`;

const ShoppingCartIcon = styled(ShoppingCart).attrs({
  className: "ml-2",
})``;

const NumberOfProducts = styled.div.attrs({
  className: "mb-0 ml-1",
})``;

function mapStateToProps(state: rootState) {
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

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Header: React.FC<Props> = ({ user, signOut, numberOfProducts }) => (
  <StyledHeader data-testid="header">
    <ContentContainer>
      <LogoLink to="/">
        <Logo src={LogoSvg} alt="Sirluggia Shop" />
      </LogoLink>
      <div>
        {user && <p>Salut, {user.displayName}!</p>}
        <RightOptionsContainer>
          {user ? (
            <LogoutButton type="button" onClick={() => signOut()}>
              Delogare
            </LogoutButton>
          ) : (
            <LoginLink to="/login">Logare</LoginLink>
          )}
          <CartSection data-testid="header-cart-section">
            <CartLink to="/cart">
              <ShoppingCartIcon />
              <NumberOfProducts>{numberOfProducts}</NumberOfProducts>
            </CartLink>
          </CartSection>
        </RightOptionsContainer>
      </div>
    </ContentContainer>
  </StyledHeader>
);

export default connector(Header);
