import React from "react";

const RadioInput = ({ category, checked }) => {
  return (
    <div>
      <input
        type="radio"
        name="category"
        value={category}
        id=""
        defaultChecked={checked}
      />
      <label htmlFor="">{category}</label>
    </div>
  );
};

export default RadioInput;
