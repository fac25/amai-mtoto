import React from "react";
import { useForm } from "react-hook-form";
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
            <label htmlFor={element.label}>{element.label}:</label>
            <input
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
