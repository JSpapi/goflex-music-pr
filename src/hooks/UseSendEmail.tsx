import { useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSendEmailMutation } from '../services/auth.api';
import { IError } from '../types/errorMessage.type';
import { IOtpCode } from '../types/user.type';

// ! NEEDED PROPS TO SEND OTP CODE TO USER EMAIL
interface IProps {
  otpResponse?: IOtpCode;
  name: string;
  otpSuccess: boolean;
  otpError: boolean;
}

export const useSendEmail = ({
  otpResponse,
  name,
  otpError,
  otpSuccess,
}: IProps) => {
  const [sendEmail] = useSendEmailMutation();

  const navigate = useNavigate();

  // TODO 2 FUNCTION TO SEND MESSAGE WITH OTP CODE TO USER EMAIL
  const handleSendEmailRequest = async (
    data: IOtpCode | undefined,
    username: string
  ) => {
    const text = `OTP code to resset your password: ${data?.code}`;
    const emailId = toast.loading('sending...');

    // TODO 3 SEND MESSAGE POST REQUEST
    sendEmail({
      name: username,
      email: data ? data.email : 'email not found',
      text,
      subject: 'SECRET CODE',
    })
      .unwrap()
      .then((res) => {
        toast.update(emailId, {
          render: 'OTP has been sent to your email',
          type: 'info',
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        navigate({
          pathname: '/confirmOTPCode',
          search: createSearchParams({ name }).toString(),
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
  };
  // TODO 1 USE EFFECT THAT  CALL FUNCTION TO SEND MESSAGE TO USER EMAIL
  useEffect(() => {
    if (otpError || otpSuccess || otpResponse)
      handleSendEmailRequest(otpResponse, name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpError, otpSuccess]);
};
