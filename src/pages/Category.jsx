import React, { Component } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import products from "../utils/products.json";
import ProductListSidebar from "../components/ProductListSidebar";
import ProductList from "../components/ProductList";

import Container from "../utils/style-utils";

const Row = styled.div.attrs({
  className: "row",
})``;

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      items: [],
      filteredItems: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { categoryName } = match.params;
    this.setState({
      category: products[categoryName],
      items: products[categoryName].items,
      filteredItems: products[categoryName].items,
    });
  }

  filterProducts(lowerLimit, upperLimit) {
    const { items } = this.state;
    const filteredItems = items.filter(
      (product) => product.price >= lowerLimit && product.price < upperLimit
    );
    this.setState({ filteredItems });
  }

  render() {
    const { category, filteredItems } = this.state;

    return (
      <Layout>
        <Container>
          <h2>{category.name}</h2>
          <Row>
            <ProductListSidebar
              filterProducts={(low, high) => this.filterProducts(low, high)}
            />
            <ProductList products={filteredItems} />
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Category;
