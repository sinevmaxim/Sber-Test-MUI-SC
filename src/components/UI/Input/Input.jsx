import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label = "", name, register, rules, ...props }) => {
  return (
    <TextField
      InputLabelProps={{
        sx: { fontWeight: "bold" },
      }}
      fullWidth
      variant="outlined"
      label={label}
      {...(register && register(name, rules))}
      {...props}
    />
  );
};

export default Input;
