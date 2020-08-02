import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import { removeFromCart } from "../store/cart/cartActions";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

import Container from "../utils/style-utils";

const CartContainer = styled(Container).attrs({
  className: "d-flex flex-column justify-content-center align-items-center",
})``;

const ContentContainer = styled.div.attrs({
  className: "w-100",
})``;

const HeadContainer = styled.div.attrs({
  className: "d-flex justify-content-between text-center h4 text-bold",
})``;

const RowContainer = styled.div.attrs({
  className: "d-flex justify-content-between align-items-center text-center",
})``;

const Column = styled.div.attrs({
  className: "w-25",
})``;

const ProductDetailsColumn = styled.div.attrs({
  className:
    "w-25 d-flex flex-column justify-content-center align-items-center",
})``;

const ProductPriceColumn = styled.div.attrs({
  className: "w-25 d-flex justify-content-center",
})``;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-height: 100px;
`;

const Price = styled.p.attrs({
  className: "mr-2",
})``;

const StyledLink = styled(Link).attrs({
  className: "w-25 d-flex align-items-center justify-content-center",
})``;

const TotalSum = styled(Column).attrs({
  className: "my-4 text-center text-bold",
})``;

const Button = styled.button.attrs((props) => ({
  className: `btn btn-${props.variation}`,
}))``;

const PaymentContainer = styled.div.attrs({
  className: "d-flex justify-content-end border-top",
})``;

const NoProductsContainer = styled.div.attrs({
  className: "d-flex flex-column align-items-center",
})``;

const NoProductsMessage = styled.div.attrs({
  className: "h3",
})``;

const Cart = ({ products, removeFromCartConnect }) => {
  const totalSum = (productList) =>
    productList.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

  return (
    <Layout>
      <CartContainer>
        {products.length ? (
          <ContentContainer>
            <HeadContainer>
              <Column>Produs</Column>
              <Column>Pret</Column>
              <Column>Cantitate</Column>
              <Column>Total</Column>
            </HeadContainer>
            {products.map((product) => (
              <RowContainer key={product.id}>
                <ProductDetailsColumn>
                  <ProductImage src={product.image} alt="Produs" />
                  <p>{product.name}</p>
                </ProductDetailsColumn>
                <Column>
                  {product.price} {product.currency}
                </Column>
                <Column>{product.quantity}</Column>
                <ProductPriceColumn>
                  <Price>
                    {product.price * product.quantity} {product.currency}
                  </Price>
                  <button
                    type="button"
                    onClick={() => removeFromCartConnect({ id: product.id })}
                  >
                    <Close />
                  </button>
                </ProductPriceColumn>
              </RowContainer>
            ))}
            <PaymentContainer>
              <StyledLink to="/checkout">
                <Button type="button" variation="dark">
                  Plătește
                </Button>
              </StyledLink>

              <TotalSum>
                {totalSum(products)} {products[0].currency}
              </TotalSum>
            </PaymentContainer>
          </ContentContainer>
        ) : (
          <NoProductsContainer>
            <NoProductsMessage>Nu ai produse în coș!</NoProductsMessage>
            <Link to="/">
              <Button type="submit" variation="outline-dark">
                Inapoi la home
              </Button>
            </Link>
          </NoProductsContainer>
        )}
      </CartContainer>
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
    removeFromCartConnect: (payload) => dispatch(removeFromCart(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
