import React from "react";

const button = props => {
  return <button {...props}>{props.children}</button>;
};

export default button;
