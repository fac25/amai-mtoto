import React from "react";
import Media from "./Media";
import { Text, ListItem, UnorderedList, VStack } from "@chakra-ui/react";

const BabyProgress = ({ mediaSrc, username, weekNum, sizeDescriptor }) => {
  return (
    <div>
      <VStack>
        <Text>Hi {username}!</Text>
        <Text>
          You are now {weekNum} {weekNum === 1 ? "week" : "weeks"} pregnant
          &#129395;
        </Text>

        {weekNum >= 4 ? (
          <div>
            <Text>{sizeDescriptor}</Text>
            <Media
              height="150"
              width="150"
              mediaType="image"
              mediaSrc={mediaSrc}
            />
          </div>
        ) : (
          <Week1To3Text></Week1To3Text>
        )}
      </VStack>
    </div>
  );
};

function Week1To3Text() {
  return (
    <div>
      <Text>
        Your weeks of pregnancy are dated from the first day of your last
        period. This means that in the first 2 weeks or so, you are not actually
        pregnant; your body is preparing for ovulation (releasing an egg from
        one of your ovaries) as usual. <br></br>
        <br></br>Your &quot;getting pregnant&quot; timeline is:
        <br></br>
        <UnorderedList>
          <ListItem>day 1: the first day of your period </ListItem>
          <ListItem>
            day 14 (or slightly before or after, depending how long your
            menstrual cycle is): you ovulate
          </ListItem>
          <ListItem>
            within 24 hours of ovulation, the egg is fertilised by sperm if you
            have had sex in the last few days without using contraception
          </ListItem>
          <ListItem>
            about 5 to 6 days after ovulation, the fertilised egg burrows into
            the lining of the womb; this is called implantation
          </ListItem>
          <ListItem>you&apos;re now pregnant</ListItem>
        </UnorderedList>
      </Text>
    </div>
  );
}

export default BabyProgress;
