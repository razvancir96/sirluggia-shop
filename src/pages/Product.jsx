import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Layout from "../components/Layout";
import products from "../utils/products.json";
import { addToCart } from "../store/cart/cartActions";
import Container from "../utils/style-utils";

const Title = styled.h1.attrs({
  className: "mt-3 mb-5 h2",
})``;

const ImageWrapper = styled.div.attrs({
  className: "d-flex mr-5",
})`
  width: 400px;
  height: 400px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: start;
  }
`;

const Image = styled.img`
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ProductInfo = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductDetails = styled.div`
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Price = styled.p.attrs({
  className: "h3 text-danger",
})``;

const Button = styled.button.attrs({
  className: "btn btn-dark mb-4 font-weight-bold",
})``;

const BoldText = styled.span.attrs({
  className: "font-weight-bold",
})``;

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { productId } = match.params;
    const categoryValues = Object.values(products);
    const productItems = categoryValues.reduce(
      (acc, category) => [...acc, ...category.items],
      []
    );
    const currentProduct = productItems.find(
      (product) => Number(productId) === product.id
    );
    this.setState({ product: currentProduct });
  }

  render() {
    const { product } = this.state;
    const { addToCartInjected } = this.props;

    return (
      <Layout>
        <Container>
          <Title>{product.name}</Title>

          <ProductInfo>
            <ImageWrapper>
              <Image src={product.image} alt="Product presentation" />
            </ImageWrapper>

            <ProductDetails>
              <Price>
                {product.price} {product.currency}
              </Price>
              <Button
                type="button"
                onClick={() => {
                  addToCartInjected({
                    product: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      currency: product.currency,
                      image: product.image,
                    },
                  });
                }}
              >
                Adaugă în coș
              </Button>
              <p>
                <BoldText>Mărime</BoldText>: {product.size}
              </p>
              <p>
                <BoldText>Culoare</BoldText>: {product.colour}
              </p>
              <p>
                <BoldText>Material</BoldText>: {product.material}
              </p>
              <p>
                <BoldText>Brand</BoldText>: {product.brand}
              </p>
              <p>
                <BoldText>Descriere</BoldText>: {product.description}
              </p>
            </ProductDetails>
          </ProductInfo>
        </Container>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCartInjected: (payload) => dispatch(addToCart(payload)),
  };
}

export default connect(null, mapDispatchToProps)(Product);
