import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import HomeCategory from "../components/HomeCategory";
import Container from "../utils/style-utils";

import { getCategoriesService } from "../services/categories";

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
    getCategoriesService().then((categories) => {
      this.setState({ categories });
    });
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
                route={category.route}
                name={category.name}
                description={category.description}
                image={category.image}
              />
            ))}
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Home;
