import React, { useState } from "react";
import { FormProvider, set, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import {
  Input,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Flex,
  Container,
} from "@chakra-ui/react";
import JustForNonLoggedInUsers from "../components/JustForNonLoggedInUsers";
import { userIdOfRos } from "../components/AdminWrapper";
import ErrorAlert from "../components/ErrorAlert";

const Login = () => {
  const { logIn } = useAuth();
  const router = useRouter();
  const methods = useForm({ mode: "onBlur" });
  const [firebaseAuthErrorMsg, setFirebaseAuthErrorMsg] = useState();
  const [errorIsVisible, setErrorIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.uid === userIdOfRos) {
          //if user is Ros, redirect to admin page
          router.push(`/admin/dashboard`);
        } else {
          //otherwise, redirect to home page
          router.push(`/home-page?trimester=1`);
        }
      });
    } catch (error) {
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        setFirebaseAuthErrorMsg("Incorrect password");
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        setFirebaseAuthErrorMsg(
          "Email has not been registered, please sign up"
        );
      } else {
        setFirebaseAuthErrorMsg(error.message);
      }
      setErrorIsVisible(true);
      //console.log(error.message);
    }
  };
  return (
    <JustForNonLoggedInUsers>
      <Container>
        <Flex minH="80vh" width="full" align="center" justifyContent="center">
          <Box p={5} width="xl" borderWidth="1px" shadow="md">
            <Box textAlign="center">
              <Heading as="h1" mb="20px">
                Log In
              </Heading>
            </Box>
            <FormProvider {...methods}>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Stack
                  spacing="3"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <FormControl
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems="center"
                  >
                    <FormLabel minW="20" textAlign="center">
                      <label htmlFor="">Email</label>
                    </FormLabel>

                    <Input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      size="lg"
                    />
                    {errors.email && (
                      <ErrorAlert title={errors.email.message}></ErrorAlert>
                    )}
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems="center"
                  >
                    <FormLabel minW="20" textAlign="center">
                      <label htmlFor="">Password</label>
                    </FormLabel>

                    <Input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      size="lg"
                    />
                    {errors.password && (
                      <ErrorAlert title={errors.password.message}></ErrorAlert>
                    )}
                  </FormControl>
                  {errorIsVisible ? (
                    <ErrorAlert title={firebaseAuthErrorMsg}></ErrorAlert>
                  ) : null}
                  <div>
                    <Button type="submit" minWidth={{ base: "full", md: "48" }}>
                      submit
                    </Button>
                  </div>
                </Stack>
              </form>
            </FormProvider>
          </Box>
        </Flex>
      </Container>
    </JustForNonLoggedInUsers>
  );
};

export default Login;
