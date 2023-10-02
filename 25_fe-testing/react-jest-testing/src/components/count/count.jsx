import React, { useState } from "react";
import Button from "../button";
// export const TodoList = () => {
//   return ;
// };

const Count = props => {
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setTotal(prev => prev + 1);
  };

  return (
    <div {...props}>
      <span data-testid={props["data-testid-span"]}>{total}</span>
      <Button onClick={handleClick} data-testid={props["data-testid-button"]}>
        Add New
      </Button>
    </div>
  );
};

export default Count;
