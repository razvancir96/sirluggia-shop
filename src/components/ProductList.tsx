import React from "react";
import styled from "styled-components";

import ProductItem from "./ProductItem";

const Column = styled.div.attrs({
  className: "col-12 col-md-9",
})``;

const Row = styled.div.attrs({
  className: "row",
})``;

export type ProductType = {
  name: string;
  price: number;
  currency: number;
  image: string;
  id: string;
};

type Props = {
  products: ProductType[];
};

const ProductList: React.FC<Props> = (props) => {
  const { products } = props;

  return (
    <Column>
      <Row>
        {products.map((product) => (
          <ProductItem
            id={product.id}
            name={product.name}
            price={product.price}
            currency={product.currency}
            image={product.image}
            key={product.id}
          />
        ))}
      </Row>
    </Column>
  );
};

export default ProductList;
