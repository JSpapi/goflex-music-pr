import React from 'react';
import { useCurrentQuery } from '../../services/auth.api';
import { Test } from './Test';

export function Preloader({ children }: { children: JSX.Element }) {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <Test />;
  }

  return children;
}
