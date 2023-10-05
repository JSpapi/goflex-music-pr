import { Container, Input, Typography } from '@mui/material';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import s from '../authPages.module.scss';
import { InputField } from '../../components/UI/textField/InputField';
import { useGenerateOTPQuery } from '../../services/auth.api';
import { useSendEmail } from '../../hooks/UseSendEmail';

export function ConfirmName() {
  const [name, setName] = useState('');
  const [skip, setSkip] = useState(true);

  // TODO 3 GENERATE OTP CODE REQUEST
  const {
    isLoading: otpCodeLoading,
    isSuccess: otpSuccess,
    data: otpResponse,
    isError: otpError,
  } = useGenerateOTPQuery(name, { skip });

  // TODO 4 SEND OTP CODE TO USER EMAIL HOOK
  useSendEmail({ otpResponse, otpError, name, otpSuccess });

  // TODO 1 SCHEMA FOR USER NAME VALIDATION
  const registerSchema = object({
    name: string()
      .trim()
      .nonempty('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be no more than 32 characters'),
  });

  type NameField = TypeOf<typeof registerSchema>;

  // TODO 2 USEFORM COMBINING WITH ZOD
  const methods = useForm<NameField>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  const onConfirmName: SubmitHandler<NameField> = (userData) => {
    setName(userData.name);
    setSkip(false);
    reset();
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
                  backdropFilter: 'blur(3px)',
                }}
              />

              <button
                className={s.authorization_form__btn}
                type="submit"
                style={otpCodeLoading ? { opacity: 0.5 } : { opacity: 1 }}
                disabled={otpCodeLoading}
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
