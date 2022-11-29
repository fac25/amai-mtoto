import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
