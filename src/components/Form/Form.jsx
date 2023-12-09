import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../UI/Input/Input.jsx";
import SendButton from "../UI/SendButton/SendButton.jsx";
import PhoneInput from "../UI/PhoneInput/PhoneInput.jsx";
import EmailInput from "../UI/EmailInput/EmailInput.jsx";
import MessageInput from "../UI/MessageInput/MessageInput.jsx";
import { Grid, Typography } from "@mui/material";

const StyledForm = styled.form`
  padding: 4rem;
  border-radius: 16px;
  background-color: white;
  max-width: 800px;
  margin: 100px auto;
  grid-template-columns: repeat(2, 1fr);
`;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Форма отправки сообщений
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            helperText={errors.name ? errors.name.message : null}
            id="name"
            name="name"
            label="Имя"
            register={register}
            rules={{
              minLength: {
                value: 3,
                message: "Минимальная длина - 3 символа",
              },
              required: { value: true, message: "Поле должно быть заполнено" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            helperText={errors.lastName ? errors.lastName.message : null}
            id="lastName"
            name="lastName"
            label="Фамилия"
            register={register}
            rules={{
              minLength: {
                value: 3,
                message: "Минимальная длина - 3 символа",
              },
              required: { value: true, message: "Поле должно быть заполнено" },
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <PhoneInput
            helperText={errors.phone ? errors.phone.message : null}
            id="phone"
            name="phone"
            label="Телефон"
            register={register}
            rules={{
              pattern: {
                value: /\+\d \(\d\d\d\) \d\d\d-\d\d-\d\d/i,
                message:
                  "Введите корректный номер телефона в формате +7 (111) 111-11-11",
              },
              required: { value: true, message: "Поле должно быть заполнено" },
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <EmailInput
            helperText={errors.email ? errors.email.message : null}
            id="email"
            name="email"
            register={register}
            label="Email адрес"
            rules={{
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введите корректный email адрес",
              },
              required: { value: true, message: "Поле должно быть заполнено" },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <MessageInput
            helperText={errors.message ? errors.message.message : null}
            label="Сообщение"
            id="message"
            name="message"
            register={register}
            rules={{
              minLength: {
                value: 3,
                message: "Минимальная длина - 3 символа",
              },
              required: { value: true, message: "Поле должно быть заполнено" },
            }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <SendButton />
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default Form;
