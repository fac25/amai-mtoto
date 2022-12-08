import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { addNewUser } from "../firebase/firestore";
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
import {
  convertDateInputToMillisecondsFormat,
  convertMillisecondsToDateStringFormat,
  dateInFourtyOneWeeksTime,
} from "../lib/helper-functions";
import JustForNonLoggedInUsers from "../components/JustForNonLoggedInUsers";
import ErrorAlert from "../components/ErrorAlert";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [firebaseAuthErrorMsg, setFirebaseAuthErrorMsg] = useState();
  const [errorIsVisible, setErrorIsVisible] = useState(false);

  const { signUp } = useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      let ms = convertDateInputToMillisecondsFormat(data.dueDate);
      await signUp(data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        // [X] add a new user (document) to the users collection, the id of this user (document) should be user.uid (from auth)
        addNewUser(user.uid, data.name, ms);
        // data.name is the user's name and ms  is thrir due date
        // [X] once signed up redirect to home page
        router.push(`/home-page?trimester=1`);
      });
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setFirebaseAuthErrorMsg("Please enter a valid email");
      } else if (
        error.message === "Firebase: Error (auth/email-already-in-use)."
      ) {
        setFirebaseAuthErrorMsg(
          "This email has already been registered, please log in"
        );
      } else if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setFirebaseAuthErrorMsg("Password must be at least 6 characters");
      } else {
        setFirebaseAuthErrorMsg(error.message);
      }
      setErrorIsVisible(true);
      console.log(error.message);
    }
  };
  return (
    <JustForNonLoggedInUsers>
      <Container>
        <Flex minH="80vh" width="full" align="center" justifyContent="center">
          <Box p={5} width="xl" borderWidth="1px" shadow="md">
            <Box textAlign="center">
              <Heading as="h1" mb="20px">
                Sign Up
              </Heading>
            </Box>
            <form id="signupForm" action="" onSubmit={handleSubmit(onSubmit)}>
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
                    <label htmlFor="name">Name</label>
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    size="lg"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <ErrorAlert title={errors.name.message}></ErrorAlert>
                  )}
                </FormControl>

                <FormControl
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <FormLabel minW="20" textAlign="center">
                    <label htmlFor="dueDate">Due date</label>
                  </FormLabel>
                  <Input
                    type="date"
                    id="dueDate"
                    size="lg"
                    {...register("dueDate", {
                      required: "Due date is required",
                      min: `${convertMillisecondsToDateStringFormat(
                        new Date().getTime()
                      )}`,
                      max: `${dateInFourtyOneWeeksTime()}`,
                    })}
                  />
                  
                  {errors.dueDate && errors.dueDate.type === "min" && (
                    <ErrorAlert title="Due date cannot be in the past"></ErrorAlert>
                  )}
                  {errors.dueDate && errors.dueDate.type === "max" && (
                    <ErrorAlert title="Due date too far in the future"></ErrorAlert>
                  )}
                </FormControl>

                <FormControl
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <FormLabel minW="20" textAlign="center">
                    <label htmlFor="email">Email</label>
                  </FormLabel>
                  <Input
                    type="email"
                    id="email"
                    size="lg"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <ErrorAlert title={errors.email.message}></ErrorAlert>
                  )}
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <FormLabel minW="20" textAlign="center">
                    <label htmlFor="password">Password</label>
                  </FormLabel>

                  <Input
                    type="password"
                    id="password"
                    size="lg"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <ErrorAlert title={errors.password.message}></ErrorAlert>
                  )}
                </FormControl>
                {errorIsVisible ? (
                  <ErrorAlert title={firebaseAuthErrorMsg}></ErrorAlert>
                ) : null}
                <Button type="submit" minW={{ base: "full", md: "48" }}>
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Container>
    </JustForNonLoggedInUsers>
  );
};

export default Signup;
