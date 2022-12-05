import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Heading, Center } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Center>
        <Heading>Amai Mtoto</Heading>
      </Center>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
