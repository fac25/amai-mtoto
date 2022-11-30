import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import Media from "../components/Media";

// About:

const AboutUs = () => {
  return (
    <Layout>
      <Heading>About Us</Heading>
      <Text>
        <strong>Amai Mtoto</strong> simply translates as mother and child, taken
        from the languages from Shona <em>(Zimbabwe)</em> and Swahili
        <em>(South Africa)</em>. <br />
        This pregnancy wellness app has been designedfor those from a
        Afro-Caribbean background to give you evidence based information in the
        areas of exercise, nutrition and diet, mental wellbeing, and parent
        education to help support and empower you and your family through your
        pregnancy journey and beyond. <br />
        The aim is to make topics surrounding pregnancy wellness easier for you
        to navigate, by supporting you with knowledge, recommending exercises
        that are safe during and after pregnancy, setting goals in selfcare, and
        finding cultural recipes that you will find tasty and nutritious.
        <br />
        What makes this pregnancy wellness app different is that you will feel
        culturally represented from the videos that you can watch, the foods
        that you can eat and the topics of conversation/articles that you will
        read. knowing you have trusted knowledge
      </Text>

      <Media
        height="400"
        width="600"
        mediaType="image"
        mediaSrc="https://cdn.discordapp.com/attachments/1046449122737131643/1047552129000296488/image.png"
      />
    </Layout>
  );
};

export default AboutUs;
