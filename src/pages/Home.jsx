import React from "react";
import Layout from "../components/Layout";
import products from "../utils/products.json";
import HomeCategory from "../components/HomeCategory";
import Container from "../utils/style-utils";

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
        <Container className="container-fluid">
          <div className="row">
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
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Home;
