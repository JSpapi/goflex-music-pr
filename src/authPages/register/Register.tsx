import { Avatar, Container, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import { InputField } from '../../components/UI/textField/InputField';
import s from '../authPages.module.scss';
import { PasswordField } from '../../components/UI/passwordField/PasswordField';
import { convertToBase } from '../../utils/convert';
import { useRegisterMutation } from '../../services/auth.api';

export function Register() {
  // const [loading, setLoading] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const navigate = useNavigate();

  // !REGISTRATION POST REQUEST FN
  const [registerUser, { isLoading: registerLoading }] = useRegisterMutation();

  // TODO 1 SCHEMA FOR REGISTRATION VALIDATION
  const registerSchema = object({
    name: string()
      .trim()
      .nonempty('Поле обязательно к заполнению')
      .min(2, 'Имя должно состоять не меньше 2 символов')
      .max(32, 'Имя должно состоять не больше 32 символов'),
    email: string()
      .trim()
      .nonempty('Поле обязательно к заполнению')
      .email('электронная почта не действительна'),
    password: string()
      .trim()
      .nonempty('Поле обязательно к заполнению')
      .min(4, 'Пароль должен состоять не меньше 2 символов')
      .max(32, 'Пароль должен состоять не больше 32 символов'),
    passwordConfirm: string()
      .trim()
      .nonempty('Пожалуйста, подтвердите свой пароль'),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
  });

  type RegisterField = TypeOf<typeof registerSchema>;

  // TODO 1 USEFORM COMBINING WITH ZOD
  const methods = useForm<RegisterField>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  // !REGISTRATION  SUBMIT FN
  const onRegisterSubmit: SubmitHandler<RegisterField> = async (userData) => {
    const { passwordConfirm, ...restData } = Object.assign(userData, {
      profile: imgFile,
    });

    try {
      await registerUser(restData).unwrap();
    } catch (err) {}
    reset();
    // .then(() => console.log('success'))
    // .catch(() => console.log('err'));
  };
  // !CAN NOT HANDLE WITH TYPE PROBLEM NULL  AND HAD TO USE ANY HERE, AFTER GETTING  MORE INFO GONNA SOLVE IT
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadImg = async (e: any) => {
    const base64 = await convertToBase(e.target.files[0]);

    setImgFile(base64);
  };

  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Create Your{' '}
          <span style={{ color: '#fff', fontWeight: 700 }}>Auditica</span>{' '}
          Account and get 30% OFF
        </AuthTitle>

        <div className={s.authorization_fields}>
          <FormProvider {...methods}>
            <form
              className={s.authorization_form}
              onSubmit={handleSubmit(onRegisterSubmit)}
            >
              <div className={s.user_img}>
                <label htmlFor="user">
                  <Avatar
                    src={imgFile || '/broken-img.jpg'}
                    alt="Avatar"
                    sx={{ width: 70, height: 70 }}
                  />
                  <input
                    type="file"
                    id="user"
                    name="user"
                    onChange={uploadImg}
                    accept="image/*"
                  />
                </label>

                <Typography variant="body2" sx={{ margin: '10px 0px' }}>
                  Change the Avatar
                </Typography>
              </div>

              <InputField
                name="email"
                label="Email"
                size="small"
                margin="dense"
                variant="filled"
                sx={{ marginBottom: 1, backdropFilter: 'blur(3px)' }}
              />
              <InputField
                name="name"
                label="Name"
                size="small"
                margin="dense"
                variant="filled"
                sx={{ marginBottom: 1, backdropFilter: 'blur(3px)' }}
              />
              <PasswordField
                name="password"
                label="Password"
                size="small"
                margin="dense"
                variant="filled"
                sx={{ marginBottom: 1, backdropFilter: 'blur(3px)' }}
              />
              <PasswordField
                name="passwordConfirm"
                label="Password Confirm"
                size="small"
                margin="dense"
                variant="filled"
                sx={{ marginBottom: 2, backdropFilter: 'blur(3px)' }}
              />

              <button className={s.authorization_form__btn} type="submit">
                Create Account
              </button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
}
