import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import products from "../utils/products.json";
import HomeCategory from "../components/HomeCategory";
import Container from "../utils/style-utils";

const Row = styled.div.attrs({
  className: "row",
})``;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const categories = Object.keys(products);
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <Layout>
        <Container>
          <Row>
            {categories.map((category, index) => (
              <HomeCategory
                // eslint-disable-next-line
                key={index}
                route={category}
                name={products[category].name}
                description={products[category].description}
                image={products[category].image}
              />
            ))}
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Home;
