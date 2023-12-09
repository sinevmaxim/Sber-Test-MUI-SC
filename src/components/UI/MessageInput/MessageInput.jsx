import React from "react";
import Input from "../Input/Input.jsx";

const MessageInput = (props) => {
  return <Input multiline rows={4} {...props} />;
};

export default MessageInput;
