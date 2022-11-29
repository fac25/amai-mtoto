import React from "react";
import { useForm } from "react-hook-form";
const Form = (/*{ formElements, formSubmitFunction }*/) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = formSubmitFunction();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formElements.map((element, i) => {
        return (
          <div key={i}>
            <label htmlFor={element.label}>{element.label}:</label>
            <input
              type={element.type}
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
