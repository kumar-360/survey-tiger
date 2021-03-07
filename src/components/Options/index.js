import React from "react";
import Header from "../Header";

const Options = ({
  value,
  type,
  placeholder,
  onChange,
  addItem,
  deleteItem,
}) => {
  return (
    <div>
    
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button onClick={addItem}>+</button>
      <button onClick={deleteItem}>-</button>
    </div>
  );
};

export default Options;
