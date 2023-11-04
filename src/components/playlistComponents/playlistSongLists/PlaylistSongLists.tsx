import { PlaylistView } from '@components/playlistView/PlaylistView';
import React from 'react';
import playIcon from '@assets/content-icons/play_icon_filled.svg';
import pauseIcon from '@assets/content-icons/pause_icon_filled.svg';
import { useWindowSize } from 'usehooks-ts';
import { PlaylistSong } from '../playlistSong/PlaylistSong';
import s from './PlaylistSongLists.module.scss';
import { PlaylistSongResponsive } from '../playlistSongResponsive/PlaylistSongResponsive';

export function PlaylistSongLists() {
  const { width } = useWindowSize();

  return (
    <div>
      <PlaylistView
        titleText="Recently Played"
        pauseIcon={pauseIcon}
        playIcon={playIcon}
      />
      {Array.from({ length: 4 }).map((index) =>
        width >= 1040 ? (
          <PlaylistSong key={index} />
        ) : (
          <PlaylistSongResponsive />
        )
      )}
    </div>
  );
}
