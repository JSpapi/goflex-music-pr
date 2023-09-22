import React from 'react';
import LogoImg from '../../assets/logo-big.png';
import s from './AuthTitle.module.scss';

type Props = {
  children: React.ReactNode;
};

export function AuthTitle({ children }: Props) {
  return (
    <div className={s.authTitle}>
      <img src={LogoImg} alt="logo" className={s.authTitle_img} />
      <h2 className={s.authTitle_info} style={{ color: '#E11720' }}>
        {children}
      </h2>
    </div>
  );
}
