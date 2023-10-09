import { Avatar, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useRegisterMutation, useSendEmailMutation } from '@services/auth.api';
import { AuthTitle } from '@components/authTitle/AuthTitle';
import { InputField } from '@components/UI/textField/InputField';
import { PasswordField } from '@components/UI/passwordField/PasswordField';
import { convertToBase } from '@utils/convert';
import s from '../authPages.module.scss';

export function Register() {
  const [imgFile, setImgFile] = useState('');
  const navigate = useNavigate();

  // !REGISTRATION POST REQUEST FN
  const [registerUser, { isLoading: registerLoading }] = useRegisterMutation();

  // !SEND MESSAGE TO EMIL POST REQUEST FN
  const [sendEmail, { isLoading: emailLoading }] = useSendEmailMutation();
  // TODO 1 SCHEMA FOR REGISTRATION VALIDATION
  const registerSchema = object({
    name: string()
      .trim()
      .nonempty('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be no more than 32 characters'),
    email: string()
      .trim()
      .nonempty('Email is required')
      .email('Email is not valid'),
    password: string()
      .trim()
      .nonempty('Password is required')
      .min(4, 'Password must be at least 4 characters')
      .max(32, 'Password must be no more than 32 characters'),
    passwordConfirm: string().trim().nonempty('Please confirm your password'),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Password mismatch',
  });

  type RegisterField = TypeOf<typeof registerSchema>;

  // TODO 2 USEFORM COMBINING WITH ZOD
  const methods = useForm<RegisterField>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  // TODO 2 REGISTRATION  SUBMIT FN
  const onRegisterSubmit: SubmitHandler<RegisterField> = async (userData) => {
    const { passwordConfirm, ...restData } = Object.assign(userData, {
      profile: imgFile,
    });
    const registerId = toast.loading('Creating...');
    registerUser(restData)
      .unwrap()
      .then((res) => {
        toast.update(registerId, {
          render: 'Account has created 👌',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        if (!registerLoading) {
          const { email, name } = res;

          const emailId = toast.loading('sending...');

          sendEmail({ email, name })
            .unwrap()
            .then((emailRes) => {
              toast.update(emailId, {
                render: 'Message has been sent to your email',
                type: 'info',
                isLoading: false,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            })
            .catch((err: IError) => {
              toast.update(emailId, {
                render: err.data.message,
                type: 'error',
                isLoading: false,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            });
        }

        navigate('/');
        reset();
      })
      .catch((err: IError) => {
        toast.update(registerId, {
          render: err.data.message,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
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

              <button
                className={s.authorization_form__btn}
                style={registerLoading ? { opacity: 0.5 } : { opacity: 1 }}
                type="submit"
                disabled={registerLoading}
              >
                Create Account
              </button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
}
