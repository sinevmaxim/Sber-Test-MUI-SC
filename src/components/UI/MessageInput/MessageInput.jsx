import Input from "../Input/Input.jsx";
import React from "react";

const MessageInput = (props) => {
  return <Input multiline rows={4} {...props} />;
};

export default MessageInput;
