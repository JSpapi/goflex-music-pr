import { Container } from '@mui/material';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import s from '../authPages.module.scss';

let currentOTPIndex = 0;
export function ConfirmOtpCode() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // TODO 1 GET VALUE OR DELETE VALUE OF EACH INPUT AND SET TO OTP STATE

  const handleOtpChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOtp);
  };
  // TODO 2 DELETE VALUE ON BACKSPACE KEYDOWN
  const onHandleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
  };
  // TODO 3 FOCUSE ON CURRENT INPUT
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Please enter
          <span style={{ color: '#fff', fontWeight: 700 }}> OTP code </span> to
          verify
        </AuthTitle>
        <div className={s.authorization_fields} style={{ paddingTop: '100px' }}>
          <form className={s.authorization_form}>
            <div className={s.authorization_form__otp}>
              {otp.map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    className={s.otpField}
                    onKeyDown={(e) => onHandleKeyDown(e, index)}
                    onChange={handleOtpChange}
                    value={otp[index]}
                  />
                </React.Fragment>
              ))}
            </div>

            <p style={{ fontSize: 12, textAlign: 'center' }}>
              didn`t get OTP code?{' '}
              <button type="button" className={s.authorization_form__resendBtn}>
                Resend the code
              </button>
            </p>

            <button className={s.authorization_form__btn} type="submit">
              Verify code
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
