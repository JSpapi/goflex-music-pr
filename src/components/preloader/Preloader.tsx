import React from 'react';
import { useCurrentQuery } from '../../services/auth.api';
import { PreloaderAnimation } from './PreloaderAnimation';

export function Preloader({ children }: { children: JSX.Element }) {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <PreloaderAnimation />;
  }

  return children;
}
