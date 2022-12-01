import React from "react";
import { Button } from "@chakra-ui/react";

const ChakraButton = (props) => {
  return (
    <div>
      <Button onClick={props.functionToCallWhenButtonIsClicked}>
        {props.children}
      </Button>
    </div>
  );
};

export default ChakraButton;
