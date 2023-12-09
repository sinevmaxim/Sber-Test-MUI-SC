import React from "react";
import Input from "../Input/Input.jsx";

const PhoneInput = ({ label, ...props }) => {
  return <Input label={label} type="tel" {...props} />;
};

export default PhoneInput;
