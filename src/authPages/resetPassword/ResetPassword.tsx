import { Container, Input, Typography } from '@mui/material';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import s from '../authPages.module.scss';
import { InputField } from '../../components/UI/textField/InputField';
import { useGenerateOTPQuery } from '../../services/auth.api';
import { useSendEmail } from '../../hooks/UseSendEmail';
import { PasswordField } from '../../components/UI/passwordField/PasswordField';

export function ResetPassword() {
  // todo GETTING PARAMS
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [name, setName] = useState(searchParams.get('name') || '');

  // TODO 1 SCHEMA FOR USER NAME VALIDATION
  const registerSchema = object({
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

  type ResetField = TypeOf<typeof registerSchema>;
  // TODO 2 USEFORM COMBINING WITH ZOD
  const methods = useForm<ResetField>({
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit, reset } = methods;

  const onResetSubmit: SubmitHandler<ResetField> = async (passwordData) => {
    console.log(passwordData);
  };

  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Welcome back
          <span style={{ color: '#fff', fontWeight: 700 }}> {name} </span>
          Don&quot;t forget your new password
        </AuthTitle>

        <div className={s.authorization_fields} style={{ paddingTop: '100px' }}>
          <FormProvider {...methods}>
            <form
              className={s.authorization_form}
              onSubmit={handleSubmit(onResetSubmit)}
            >
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
                type="submit"
                // style={otpCodeLoading ? { opacity: 0.5 } : { opacity: 1 }}
                // disabled={otpCodeLoading}
              >
                Reset Password
              </button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
}
