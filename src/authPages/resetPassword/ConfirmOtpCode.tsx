import { Container } from '@mui/material';
import {
  ChangeEvent,
  FormEvent,
  Fragment,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import { useSendEmail } from '../../hooks/UseSendEmail';
import {
  useGenerateOTPQuery,
  useVerifyOTPQuery,
} from '../../services/auth.api';
import s from '../authPages.module.scss';

let currentOTPIndex = 0;
export function ConfirmOtpCode() {
  // todo GETTING PARAMS
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [name, setName] = useState(searchParams.get('name') || '');
  const [skipVerifyRequest, setSkipVerifyRequest] = useState(true);
  const [skipGenerateOtpRequest, setSkipGenerateOtpRequest] = useState(true);

  // TODO 5 VERIFY OTP REQUEST
  const {
    isError: verifyError,
    isSuccess: verifySuccess,
    isLoading: verifyLoading,
  } = useVerifyOTPQuery(
    { code: otp.join(''), name },
    { skip: skipVerifyRequest }
  );
  // TODO 5 REGENERATE OTP CODE REQUEST
  const {
    isSuccess: otpSuccess,
    data: otpResponse,
    isError: otpError,
  } = useGenerateOTPQuery(name, { skip: skipGenerateOtpRequest });

  // TODO 6 SEND OTP CODE TO USER EMAIL HOOK
  useSendEmail({ otpResponse, otpSuccess, name, otpError });

  const inputRef = useRef<HTMLInputElement>(null);

  // TODO 1 GET VALUE OR DELETE VALUE OF EACH INPUT AND SET TO OTP STATE
  const onHandleOtpChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOtp);
  };

  // TODO 2 DELETE VALUE ON BACKSPACE KEYDOWN
  const onHandleKeyDown = (
    { key }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
  };
  // TODO 3 FOCUSE ON CURRENT INPUT
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  // TODO 4 SUBMIT FORM AND ACTIVATE VERIFY OTP GET REQUEST
  const onVerifyOtpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSkipVerifyRequest(false);
  };

  // TODO 5 CHECK VERIFY REQUEST SUCCESS OR ERROR
  useEffect(() => {
    if (verifyError) {
      toast.error('Invalid OTP', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setSkipVerifyRequest(true);
    } else if (verifySuccess) {
      toast.success(`Welcome back ${name} ^_^`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      navigate({
        pathname: '/resetPassword',
        search: createSearchParams({ name }).toString(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyError, verifySuccess]);

  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Please enter
          <span style={{ color: '#fff', fontWeight: 700 }}> OTP code </span> to
          verify
        </AuthTitle>
        <div className={s.authorization_fields} style={{ paddingTop: '100px' }}>
          <form className={s.authorization_form} onSubmit={onVerifyOtpSubmit}>
            <div className={s.authorization_form__otp}>
              {otp.map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    className={s.otpField}
                    onKeyDown={(e) => onHandleKeyDown(e, index)}
                    onChange={onHandleOtpChange}
                    value={otp[index]}
                  />
                </Fragment>
              ))}
            </div>

            <p style={{ fontSize: 12, textAlign: 'center' }}>
              didn`t get OTP code?{' '}
              <button
                type="button"
                className={s.authorization_form__resendBtn}
                onClick={() => setSkipGenerateOtpRequest(false)}
              >
                Resend the code
              </button>
            </p>

            <button
              className={s.authorization_form__btn}
              type="submit"
              style={verifyLoading ? { opacity: 0.5 } : { opacity: 1 }}
              disabled={verifyLoading}
            >
              Verify code
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
