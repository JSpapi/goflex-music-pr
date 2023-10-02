import { Button } from '@mui/material';
import React from 'react';
import { useActions } from '../../hooks/useActions';

export function Home() {
  const { authLogout } = useActions();

  const logOut = () => {
    authLogout();
    localStorage.removeItem('token');
  };
  return (
    <div>
      <Button onClick={logOut} variant="contained">
        Log out
      </Button>
    </div>
  );
}
