import { Avatar, Container, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import s from '../authPages.module.scss';
import { InputField } from '../../components/UI/textField/InputField';
import { PasswordField } from '../../components/UI/passwordField/PasswordField';

export function Login() {
  const navigate = useNavigate();

  // TODO 1 SCHEMA FOR LOGIN VALIDATION
  const registerSchema = object({
    name: string()
      .trim()
      .nonempty('Поле обязательно к заполнению')
      .min(2, 'Имя должно состоять не меньше 2 символов')
      .max(32, 'Имя должно состоять не больше 32 символов'),
    password: string()
      .trim()
      .nonempty('Поле обязательно к заполнению')
      .min(4, 'Пароль должен состоять не меньше 2 символов')
      .max(32, 'Пароль должен состоять не больше 32 символов'),
  });

  type LoginField = TypeOf<typeof registerSchema>;

  // TODO 1 USEFORM COMBINING WITH ZOD
  const methods = useForm<LoginField>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Login to your{' '}
          <span style={{ color: '#fff', fontWeight: 700 }}>Auditica</span>{' '}
          Account
        </AuthTitle>

        <div className={s.authorization_fields} style={{ paddingTop: '100px' }}>
          <FormProvider {...methods}>
            <form className={s.authorization_form}>
              <InputField
                name="name"
                label="Name or Email"
                size="small"
                margin="dense"
                variant="filled"
                sx={{
                  marginBottom: 6,
                  backdropFilter: 'blur(3px)',
                }}
              />
              <PasswordField
                name="password"
                label="Password"
                size="small"
                margin="dense"
                variant="filled"
                sx={{ marginBottom: 2.3, backdropFilter: 'blur(3px)' }}
              />
              <Link to="/confirmEmail" style={{ marginBottom: 15 }}>
                Forgot password?
              </Link>

              <button className={s.authorization_form__btn} type="submit">
                Login
              </button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
}
