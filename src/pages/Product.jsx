import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Layout from "../components/Layout";
import products from "../utils/products.json";
import { addToCart } from "../store/cart/cartActions";

const ImageWrapper = styled.div`
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductDetails = styled.div`
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

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
        <div className="product-page container-fluid container-min-max-width">
          <h1 className="mt-3 mb-5 h2">{product.name}</h1>
          <ProductInfo className="d-flex">
            <ImageWrapper className="d-flex mr-5">
              <Image src={product.image} alt="Product presentation" />
            </ImageWrapper>
            <ProductDetails>
              <p className="h3 text-danger">
                {product.price} {product.currency}
              </p>
              <button
                type="button"
                className="btn btn-dark mb-4 font-weight-bold"
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
              </button>
              <p>
                <span className="font-weight-bold">Mărime</span>: {product.size}
              </p>
              <p>
                <span className="font-weight-bold">Culoare</span>:{" "}
                {product.colour}
              </p>
              <p>
                <span className="font-weight-bold">Material</span>:{" "}
                {product.material}
              </p>
              <p>
                <span className="font-weight-bold">Brand</span>: {product.brand}
              </p>
              <p className="font-weight-bold mb-1">Descriere: </p>
              <p>{product.description}</p>
            </ProductDetails>
          </ProductInfo>
        </div>
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
