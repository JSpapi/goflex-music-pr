import { Button, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import { useGetMySongsQuery } from '@services/song.api';
import { IError } from 'types/errorMessage.type';
import { useActions } from '../../hooks/useActions';

export function Home() {
  const [songError, setSongError] = useState<IError>({
    data: { message: '' },
    status: 0,
  });

  const { authLogout } = useActions();

  const {
    isLoading,
    data: songData,
    isError,
    isSuccess,
    isFetching,
  } = useGetMySongsQuery();

  const logOut = () => {
    authLogout();
    localStorage.removeItem('token');
  };

  return (
    <div>
      {isFetching && (
        <div style={{ width: 210 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <div style={{ margin: '30px 0' }}>
            <Skeleton />
            <Skeleton variant="rectangular" width="60%" />
          </div>
        </div>
      )}
      {isError && !isFetching && <h1>there is an error</h1>}
      {isSuccess && !isError && !isLoading && <h1>Hi there</h1>}

      <Button onClick={logOut} variant="contained">
        Log out
      </Button>
    </div>
  );
}
