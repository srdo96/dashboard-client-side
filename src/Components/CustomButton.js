import React from "react";

const CustomButton = ({ onClick, type, className, label }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`p-3 rounded-lg bg-primary text-white font-semibold ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
