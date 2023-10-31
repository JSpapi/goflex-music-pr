import React from 'react';
import { PlaylistCircle } from '../playlistCircle/PlaylistCircle';
import s from './PlaylistsCircleList.module.scss';

export function PlaylistsCircleList() {
  return (
    <div className={s.playlists_circle}>
      {Array.from({ length: 9 }).map((index) => (
        <PlaylistCircle key={index} />
      ))}
    </div>
  );
}
