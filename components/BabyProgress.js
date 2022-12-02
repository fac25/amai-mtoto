import React from "react";
import Media from "./Media";
import { Text } from "@chakra-ui/react";

const BabyProgress = ({ mediaSrc, username, weekNum, sizeDescriptor }) => {
  return (
    <div>
      <Text>Hi {username}!</Text>
      <br></br>
      <Text>
        You are {weekNum} weeks pregnant. Your baby is {sizeDescriptor}
      </Text>
      <Media height="150" width="150" mediaType="image" mediaSrc={mediaSrc} />
    </div>
  );
};

export default BabyProgress;
