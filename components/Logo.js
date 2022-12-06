import React from "react";
import Media from "./Media";
import LogoImg from "../public/amai-mtoto.jpg";
import { Heading } from "@chakra-ui/react";

const Logo = () => {
  return (
    <div>
      <Media
        // mediaType="video"
        // mediaSrc="vWXrFetSH8w"
        height="64"
        width="64"
        mediaType="image"
        mediaSrc={LogoImg.src}
      />
      <Heading>Amai Mtoto</Heading>
    </div>
  );
};

export default Logo;
