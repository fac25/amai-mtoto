import React from "react";
import { useRouter } from "next/router";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Textarea,
  Input,
  Button,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { isErrored } from "stream";

const ContactUs = () => {
  const router = useRouter();
  return (
    <Flex width="full" align="center" justifyContent="center" m={[20, 5]}>
      <Box
        p={8}
        w={[300, 400, 500]}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Contact Us</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form action="https://api.web3forms.com/submit" method="POST">
            <Input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORM_API_KEY}
            />
            <Input
              type="hidden"
              name="subject"
              value="AMAI-MTOTO: User Enquiry"
            />
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <Input type="text" name="name" />
              <FormErrorMessage>Name is required.</FormErrorMessage>
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input type="email" name="email" />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="msg">Your Message</FormLabel>
              <Textarea name="msg" rows={5} required></Textarea>
              <FormErrorMessage>Message is required.</FormErrorMessage>
            </FormControl>
            {/* <Input type="hidden" name="redirect" value="/home-page" /> */}
            {/* {router.push("/home-page")} */}
            <Button type="submit" mt={5}>
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUs;
