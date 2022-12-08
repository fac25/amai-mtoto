import React from "react";
import Media from "./Media";
import LogoImg from "../public/logoImage.png";
import LogoTitle from "../public/logoTitle.png";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = ({ isFooter = false }) => {
  const logoSettings = isFooter
    ? {
        // Footer
        imageHeight: "32",
        imageWidth: "32",
        titleHeight: "44",
        titleWidth: "100",
        imageSrc: LogoImg,
        titleSrc: LogoTitle,
      }
    : {
        imageHeight: "40",
        imageWidth: "40",
        titleHeight: "44",
        titleWidth: "100",
        imageSrc: LogoImg,
        titleSrc: LogoTitle,
      };
  return (
    <Link as={NextLink} href="/home-page">
      <Flex className={isFooter && "footer_logo"}>
        <Media
          height={logoSettings.imageHeight}
          width={logoSettings.imageWidth}
          mediaType="image"
          mediaSrc={logoSettings.imageSrc.src}
        />
        <Media
          className="logo_text"
          height={logoSettings.titleHeight}
          width={logoSettings.titleWidth}
          mediaType="image"
          mediaSrc={logoSettings.titleSrc.src}
        />
      </Flex>
    </Link>
  );
};

export default Logo;
