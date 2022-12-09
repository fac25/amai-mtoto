import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <Alert
        status="warning"
        variant="left-accent"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="300px"
        width={500}
        margin="0 auto"
        my={10}
        className={"disclaimer_style"}
      >
        <AlertIcon boxSize="40px" mr={10} />
        <AlertTitle mt={4} mb={1} fontSize="lg" className={"disclaimer_style"}>
          Disclaimer:
        </AlertTitle>
        <AlertDescription maxWidth="sm" className={"disclaimer_style"}>
          This app should be used as a guide and not as individualised care,
          although information is evidenced based, always refer to your
          healthcare professional (midwife or doctor), with any questions before
          starting any exercise or change in your diet.
        </AlertDescription>
      </Alert>
    </Layout>
  );
};

export default Disclaimer;
