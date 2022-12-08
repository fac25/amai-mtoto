import React from "react";
import Media from "./Media";
import LogoImg from "../public/amai-mtoto.png";
import { Heading } from "@chakra-ui/react";

const Logo = () => {
  return (
    <div>
      <Media
        // mediaType="video"
        // mediaSrc="vWXrFetSH8w"
        height="100"
        width="100"
        mediaType="image"
        mediaSrc={LogoImg.src}
      />
    </div>
  );
};

export default Logo;
