import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import layoutStyle from "../styles/Layout.module.css";

import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className={layoutStyle.custom_footer}>
      <Flex
        p={5}
        gap={[5, 10]}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={["column", "row"]}
      >
        <Logo isFooter={true} />
        <Link as={NextLink} href="/about-us">
          About us
        </Link>
        <Link as={NextLink} href="/contact-us">
          Contact us
        </Link>
        <Link as={NextLink} href="https://amai-mtoto.forumotion.com/">
          Forum
        </Link>
        <Link as={NextLink} href="/disclaimer">
          Disclaimer
        </Link>
        <p>&copy;</p>
      </Flex>
    </footer>
  );
};

export default Footer;
