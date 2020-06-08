import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { addToCart } from "../store/cart/cartActions";

const ProductImage = styled.img`
  max-width: 250px;
  max-height: 250px;
`;

const ProductItem = (props) => {
  const { name, price, currency, image, id } = props;

  return (
    <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
      <Link
        to={`/product/${id}`}
        className="d-flex flex-column align-items-center"
      >
        <ProductImage src={image} alt={name} className="mb-2" />
        <p className="mb-1 text-center">{name}</p>
        <p className="text-center" data-testid="price-section">
          {`${price} ${currency}`}
        </p>
      </Link>
      <button
        type="button"
        className="btn btn-outline-dark"
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
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
