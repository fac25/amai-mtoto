import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.functionToCallWhenButtonIsClicked}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
