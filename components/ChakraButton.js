import React from "react";
import { Button, Flex } from "@chakra-ui/react";

const ChakraButton = ({ text, functionOnClick }) => {
  return (
    <div>
      {text.map((text, i) => {
        return (
          <div key={i}>
            <Flex>
              <Button onClick={functionOnClick}>{text}</Button>
            </Flex>
          </div>
        );
      })}
    </div>
  );
};

export default ChakraButton;
