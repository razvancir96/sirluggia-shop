import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { addToCart } from "../store/cart/cartActions";

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

const ProductItem = (props) => {
  const { name, price, currency, image, id } = props;

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
          props.addToCart({
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

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
