import { Button, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import { useGetMySongsQuery } from '@services/song.api';
import { IError } from 'types/errorMessage.type';
import { VerticalSlider } from '@components/verticalSlider/VerticalSlider';
import { PlaylistView } from '@components/playlistView/PlaylistView';

import { useActions } from '@hooks/useActions';
import playIcon from '@assets/content-icons/play_icon_filled.svg';
import pauseIcon from '@assets/content-icons/pause_icon_filled.svg';
import { PlaylistCard } from '@components/playlistComponents/playlistCard/PlaylistCard';

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
      {isFetching && !songData && (
        <div>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={819}
            style={{ borderRadius: 7 }}
          />
          {/* <div >
            <Skeleton />
            <Skeleton variant="rectangular" width="60%" />
          </div> */}
        </div>
      )}
      {isError && !isFetching && <h1>there is an error</h1>}
      {isSuccess && !isError && !isLoading && (
        <div>
          <VerticalSlider />

          <PlaylistView
            titleText="New Release"
            playIcon={playIcon}
            pauseIcon={pauseIcon}
            linkText="see more"
          />

          <PlaylistCard />
        </div>
      )}

      <Button onClick={logOut} variant="contained">
        Log out
      </Button>
    </div>
  );
}
