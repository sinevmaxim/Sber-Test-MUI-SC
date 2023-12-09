import Input from "../Input/Input.jsx";
import React from "react";

const MessageInput = ({ label, ...props }) => {
  return (
    <Input
      label={label}
      multiline
      rows={4}
      {...props}
    />
  );
};

export default MessageInput;
