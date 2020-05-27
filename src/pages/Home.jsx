import React from "react";
import Layout from "../components/Layout";
import products from "../utils/products.json";
import HomeCategory from "../components/HomeCategory";

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
        <div className="container-fluid container-min-max-width">
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
        </div>
      </Layout>
    );
  }
}

export default Home;
