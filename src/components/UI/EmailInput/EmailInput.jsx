import React, { useState } from "react";
import Input from "../Input/Input.jsx";

const EmailInput = ({ label, ...props }) => {
  return <Input label={label} {...props} type="email" />;
};

export default EmailInput;
