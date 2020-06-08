import React from "react";
import styled from "styled-components";

const Column = styled.div.attrs({
  className: "col-12 col-md-3",
})``;

const FilterContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 1rem;
  }
`;

const Filter = styled.div`
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

class ProductListSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          name: "filter1",
          checked: false,
        },
        {
          name: "filter2",
          checked: false,
        },
        {
          name: "filter3",
          checked: false,
        },
      ],
    };
  }

  getCheckedValue(name) {
    const { filters } = this.state;

    const selectedFilter = filters.find((filter) => filter.name === name);
    return selectedFilter.checked;
  }

  handleCheckboxUiChange(name) {
    const { filters } = this.state;
    const modifiedFilters = filters.map((filter) => {
      if (filter.name !== name && filter.checked) {
        return {
          ...filter,
          checked: false,
        };
      }
      if (filter.name === name) {
        if (filter.checked) {
          return {
            ...filter,
            checked: false,
          };
        }
        return {
          ...filter,
          checked: true,
        };
      }
      return filter;
    });
    this.setState({ filters: modifiedFilters });
  }

  changeProducts(event, lowerLimit, upperLimit) {
    const { filterProducts } = this.props;

    if (event.target.checked) {
      filterProducts(lowerLimit, upperLimit);
    } else {
      filterProducts(0, Infinity);
    }
    this.handleCheckboxUiChange(event.target.name);
  }

  render() {
    return (
      <Column>
        <p>Filtrează după preț:</p>
        <FilterContainer>
          <Filter>
            <label htmlFor="filter1">
              <input
                type="checkbox"
                name="filter1"
                className="mr-2"
                checked={this.getCheckedValue("filter1")}
                onChange={(event) => this.changeProducts(event, 0, 100)}
              />
              &lt; 100 LEI
            </label>
          </Filter>
          <Filter>
            <label htmlFor="filter2">
              <input
                type="checkbox"
                name="filter2"
                className="mr-2"
                checked={this.getCheckedValue("filter2")}
                onChange={(event) => this.changeProducts(event, 100, 200)}
              />
              100 - 200 LEI
            </label>
          </Filter>
          <Filter>
            <label htmlFor="filter3">
              <input
                type="checkbox"
                name="filter3"
                className="mr-2"
                checked={this.getCheckedValue("filter3")}
                onChange={(event) => this.changeProducts(event, 200, Infinity)}
              />
              &gt; 200 LEI
            </label>
          </Filter>
        </FilterContainer>
      </Column>
    );
  }
}

export default ProductListSidebar;
