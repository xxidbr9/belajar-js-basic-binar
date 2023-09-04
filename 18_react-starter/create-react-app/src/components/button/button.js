import React from "react";

const Button = props => {
  return (
    <button style={props.gaya}>
      {props.children}
    </button>
  );
};

export default Button;
