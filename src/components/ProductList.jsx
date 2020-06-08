import React from "react";
import styled from "styled-components";

import ProductItem from "./ProductItem";

const Column = styled.div.attrs({
  className: "col-12 col-md-9",
})``;

const Row = styled.div.attrs({
  className: "row",
})``;

const ProductList = (props) => {
  const { products } = props;

  return (
    <Column>
      <Row>
        {products
          ? products.map((product) => (
              <ProductItem
                id={product.id}
                name={product.name}
                price={product.price}
                currency={product.currency}
                image={product.image}
                key={product.id}
              />
            ))
          : null}
      </Row>
    </Column>
  );
};

export default ProductList;
