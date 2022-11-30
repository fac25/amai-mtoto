import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
const Form = ({ formElements, formSubmitFunction }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    formSubmitFunction(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      {formElements.map((element, i) => {
        return (
          <div key={i}>
            <FormLabel htmlFor={element.label}>{element.label}:</FormLabel>
            <Input
              type={element.type}
              id={element.label}
              {...register(`${element.label}`, {
                required: "Required",
                pattern: {
                  value: element.pattern,
                  message: `${element.error} `,
                },
              })}
            />
            {errors[element.label] && errors[element.label].message}
          </div>
        );
      })}
      <Button colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
