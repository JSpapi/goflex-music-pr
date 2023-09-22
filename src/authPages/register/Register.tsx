import { Container } from '@mui/material';
import React from 'react';
import { AuthTitle } from '../../components/authTitle/AuthTitle';
import { InputField } from '../../components/UI/textField/InputField';
import s from '../authPages.module.scss';

export function Register() {
  return (
    <div className={s.authorization}>
      <Container maxWidth="xl">
        <AuthTitle>
          Create Your{' '}
          <span style={{ color: '#fff', fontWeight: 700 }}>Auditica</span>{' '}
          Account
          <p>and get 30% OFF</p>
        </AuthTitle>
        <InputField />
      </Container>
    </div>
  );
}
