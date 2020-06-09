import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > div {
    flex-grow: 1;
  }
`;

const Layout = (props) => {
  const { children } = props;

  return (
    <Page>
      <Header />
      {children}
      <Footer />
    </Page>
  );
};

export default Layout;
