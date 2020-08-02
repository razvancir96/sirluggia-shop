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

const Label = styled.label``;

const Input = styled.input.attrs({
  className: "mr-2",
})``;

type Props = {
  filterProducts: (lowerLimit: number, upperLimit: number) => void;
};

type State = {
  filters: {
    name: string;
    checked: boolean;
  }[];
};

class ProductListSidebar extends React.Component<Props, State> {
  constructor(props: Props) {
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

  getCheckedValue(name: string): boolean {
    const { filters } = this.state;

    const selectedFilter = filters.find((filter) => filter.name === name);
    return selectedFilter.checked;
  }

  handleCheckboxUiChange(name: string): void {
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

  changeProducts(
    event: React.MouseEvent<HTMLButtonElement>,
    lowerLimit: number,
    upperLimit: number
  ): void {
    const { filterProducts } = this.props;
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      filterProducts(lowerLimit, upperLimit);
    } else {
      filterProducts(0, Infinity);
    }
    this.handleCheckboxUiChange(target.name);
  }

  render(): JSX.Element {
    return (
      <Column>
        <p>Filtrează după preț:</p>
        <FilterContainer>
          <Filter>
            <Label htmlFor="filter1">
              <Input
                type="checkbox"
                name="filter1"
                checked={this.getCheckedValue("filter1")}
                onChange={(event) => this.changeProducts(event, 0, 100)}
              />
              &lt; 100 LEI
            </Label>
          </Filter>
          <Filter>
            <Label htmlFor="filter2">
              <Input
                type="checkbox"
                name="filter2"
                checked={this.getCheckedValue("filter2")}
                onChange={(event) => this.changeProducts(event, 100, 200)}
              />
              100 - 200 LEI
            </Label>
          </Filter>
          <Filter>
            <Label htmlFor="filter3">
              <Input
                type="checkbox"
                name="filter3"
                checked={this.getCheckedValue("filter3")}
                onChange={(event) => this.changeProducts(event, 200, Infinity)}
              />
              &gt; 200 LEI
            </Label>
          </Filter>
        </FilterContainer>
      </Column>
    );
  }
}

export default ProductListSidebar;
