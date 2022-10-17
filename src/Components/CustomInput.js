import React from "react";

const CustomInput = ({ type, id, placeholder, className, onChange, value }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`p-2 border border-primary ${className}`}
      />
    </div>
  );
};

export default CustomInput;
