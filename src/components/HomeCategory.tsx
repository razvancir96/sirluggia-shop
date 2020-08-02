import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Column = styled.div.attrs({
  className: "col-12 col-md-6 my-3",
})``;

const Image = styled.img.attrs({
  className: "w-100 d-block",
})``;

const Title = styled.h2.attrs({
  className: "h4 my-1",
})``;

const Description = styled.p.attrs({
  className: "m-0",
})``;

type Props = {
  route: string;
  name: string;
  description: string;
  image: string;
};

const HomeCategory: React.FC<Props> = (props) => {
  const { route, name, description, image } = props;

  return (
    <Column>
      <Link to={`/category/${route}`}>
        <Image src={image} alt={name} />
        <Title>
          <strong>{name}</strong>
        </Title>
        <Description>{description}</Description>
      </Link>
    </Column>
  );
};

export default HomeCategory;
