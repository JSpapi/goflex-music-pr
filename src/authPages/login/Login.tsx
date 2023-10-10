import { Container } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useLoginMutation } from '@services/auth.api';
import { AuthTitle } from '@components/authTitle/AuthTitle';
import { InputField } from '@components/UI/textField/InputField';
import { IError } from 'types/errorMessage.type';
import { PasswordField } from '@components/UI/passwordField/PasswordField';
import s from '../authPages.module.scss';

export function Login() {
  const navigate = useNavigate();

  // !LOGIN POST REQUEST FN
  const [loginUser, { isLoading: loginLoading }] = useLoginMutation();

  // TODO 1 SCHEMA FOR LOGIN VALIDATION
  const registerSchema = object({
    name: string()
      .trim()
      .nonempty('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be no more than 32 characters'),
    password: string()
      .trim()
      .nonempty('Password is required')
      .min(4, 'Password must be at least 4 characters')
      .max(32, 'Password must be no more than 32 characters'),
  });

  type LoginField = TypeOf<typeof registerSchema>;

  // TODO 1 USEFORM COMBINING WITH ZOD
  const methods = useForm<LoginField>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  const onLoginSubmit: SubmitHandler<LoginField> = async (loginData) => {
    const loginId = toast.loading('Checking...');

    loginUser(loginData)
      .unwrap()
      .then((res) => {
        toast.update(loginId, {
          render: `Welcome back ${res.name} ^_^`,
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/');
        reset();
      })
      .catch((err: IError) => {
        toast.update(loginId, {
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
            <form
              className={s.authorization_form}
              onSubmit={handleSubmit(onLoginSubmit)}
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
              <PasswordField
                name="password"
                label="Password"
                size="small"
                margin="dense"
                variant="filled"
                sx={{ marginBottom: 2.3, backdropFilter: 'blur(3px)' }}
              />
              <Link to="/ConfirmName" style={{ marginBottom: 15 }}>
                Forgot password?
              </Link>

              <button
                className={s.authorization_form__btn}
                type="submit"
                style={loginLoading ? { opacity: 0.5 } : { opacity: 1 }}
                disabled={loginLoading}
              >
                Login
              </button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
}
