import { Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

function TopicSection({ topicName, summary, children, href }) {
  return (
    <div>
      <Heading>{topicName}</Heading>
      <Text>{summary}</Text>
      <Link className="read-more" href={href}>
        Read more
      </Link>
      <div style={{ maxWidth: "100vw" }}>{children}</div>
    </div>
  );
}

export default TopicSection;
