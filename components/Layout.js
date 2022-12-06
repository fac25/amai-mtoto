import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Heading } from "@chakra-ui/react";
import layoutStyle from "../styles/Layout.module.css";

import { VStack, Center } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.layout_container}>
      <Nav />
      <Center>
        <VStack className={layoutStyle.layout_children}>{children}</VStack>
      </Center>
      <Footer />
    </div>
  );
};

export default Layout;
