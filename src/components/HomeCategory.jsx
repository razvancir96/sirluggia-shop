import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Column = styled.div.attrs({
  className: "col-12 col-md-6 my-3",
})``;

const HomeCategory = (props) => {
  const { route, name, description, image } = props;

  return (
    <Column>
      <Link to={`/category/${route}`}>
        <div className="w-100">
          <img src={image} alt={name} className="w-100" />
        </div>
        <h2 className="h4 my-1">
          <strong>{name}</strong>
        </h2>
        <p className="m-0">{description}</p>
      </Link>
    </Column>
  );
};

export default HomeCategory;
