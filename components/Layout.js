import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Heading } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
