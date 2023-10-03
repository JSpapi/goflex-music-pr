import { Avatar, Container, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import s from '../authPages.module.scss';
import { InputField } from '../../components/UI/textField/InputField';
import { PasswordField } from '../../components/UI/passwordField/PasswordField';
import { useLoginMutation } from '../../services/auth.api';
import { IError } from '../../types/errorMessage.type';

export function ConfirmName() {
  const [name, setName] = useState('');
  // TODO 1 SCHEMA FOR USER NAME VALIDATION
  const registerSchema = object({
    name: string()
      .trim()
      .nonempty('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be no more than 32 characters'),
  });
  type NameField = TypeOf<typeof registerSchema>;

  // TODO 1 USEFORM COMBINING WITH ZOD
  const methods = useForm<NameField>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  const onConfirmName: SubmitHandler<NameField> = (userData) => {
    setName(userData.name);
  };

  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Please enter your{' '}
          <span style={{ color: '#fff', fontWeight: 700 }}>user name</span> to
          reset password
        </AuthTitle>

        <div className={s.authorization_fields} style={{ paddingTop: '100px' }}>
          <FormProvider {...methods}>
            <form
              className={s.authorization_form}
              onSubmit={handleSubmit(onConfirmName)}
            >
              <InputField
                name="name"
                label="Name"
                size="small"
                margin="dense"
                variant="filled"
                sx={{
                  marginBottom: 6,
                  backdropFilter: 'blur(3px)',
                }}
              />

              <button
                className={s.authorization_form__btn}
                type="submit"
                // style={loginLoading ? { opacity: 0.5 } : { opacity: 1 }}
                // disabled={loginLoading}
              >
                Confirm Name
              </button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
}
