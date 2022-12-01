import React, { useState } from "react";
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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const ContactUs = () => {
  const [result, setResult] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_API_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        res.json();
        if (res.status === 200) {
          console.log("Success", res);
          setResult(true);
        } else {
          console.log("Error", res);
        }
      })
      .then(function () {
        setTimeout(() => {
          router.push("/home-page");
        }, 1000);
      });
  };

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
          <form onSubmit={handleSubmit}>
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

            <Button type="submit" mt={5}>
              Send Message
            </Button>
          </form>

          {result ? (
            <Alert status="success" mt={10}>
              <AlertIcon />
              Thank You!
            </Alert>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUs;
