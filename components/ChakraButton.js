import React from "react";
import { Button } from "@chakra-ui/react";

const ChakraButton = ({ text, functionOnClick }) => {
  return (
    <div>
      <Button onClick={functionOnClick}>{text}</Button>
    </div>
  );
};

export default ChakraButton;
