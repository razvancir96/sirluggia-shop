import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { addToCart } from "../store/cart/cartActions";
import { addToCartPayload } from "../store/cart/types";

const Column = styled.div.attrs({
  className: "col-12 col-md-4 mb-3 d-flex flex-column align-items-center",
})``;

const StyledLink = styled(Link).attrs({
  className: "d-flex flex-column align-items-center",
})``;

const Image = styled.img.attrs({
  className: "mb-2",
})`
  max-width: 250px;
  max-height: 250px;
`;

const Name = styled.p.attrs({
  className: "mb-1 text-center",
})``;

const Price = styled.p.attrs({
  className: "text-center",
})``;

const Button = styled.button.attrs({
  className: "btn btn-outline-dark",
})``;

type ComponentProps = {
  name: string;
  price: number;
  currency: number;
  image: string;
  id: string;
};

const mapDispatchToProps = {
  addToCartConnect: (product: addToCartPayload) => addToCart(product),
};

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ComponentProps & ReduxProps;

const ProductItem: React.FC<Props> = (props) => {
  const { name, price, currency, image, id, addToCartConnect } = props;

  return (
    <Column>
      <StyledLink to={`/product/${id}`}>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <Price data-testid="price-section">{`${price} ${currency}`}</Price>
      </StyledLink>
      <Button
        type="button"
        onClick={() =>
          addToCartConnect({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          })
        }
      >
        Adaugă în coș
      </Button>
    </Column>
  );
};

export default connector(ProductItem);
