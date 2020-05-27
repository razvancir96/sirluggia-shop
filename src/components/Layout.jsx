import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
