import React from "react";
import { Button, Flex } from "@chakra-ui/react";

const ChakraButton = ({ text, functionOnClick }) => {
  return (
    <Flex>
      {text.map((text, i) => {
        return (
          <div key={i}>
            <Button onClick={functionOnClick}>{text}</Button>
          </div>
        );
      })}
    </Flex>
  );
};

export default ChakraButton;
