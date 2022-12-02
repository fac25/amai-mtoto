import { Heading, Text } from "@chakra-ui/react";
import React from "react";

function TopicSection({ topicName, summary, children }) {
  return (
    <div>
      <Heading>{topicName}</Heading>
      <Text>{summary}</Text>
      <div>{children}</div>
    </div>
  );
}

export default TopicSection;
