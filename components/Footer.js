import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import Logo from "./Logo";

const Footer = () => {
  return (
    <Flex>
      <Link as={NextLink} href="/about-us">
        About us
      </Link>
      <Spacer />
      <Link as={NextLink} href="/contact-us">
        Contact us
      </Link>
      <Spacer />
      <Link as={NextLink} href="/glossary">
        Glossary
      </Link>
      <Spacer />
      <Link as={NextLink} href="/developers">
        Developers
      </Link>
      <Spacer />
      <Link as={NextLink} href="https://tfb-ros.forumotion.com/">
        Forum
      </Link>
      <Spacer />
      <p>&copy;</p>
      <Spacer />
      <Logo />
    </Flex>
  );
};

export default Footer;
