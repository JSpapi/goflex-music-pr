import { LikeBtn } from '@components/likeBtn/LikeBtn';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PlaylistSong.module.scss';

export function PlaylistSong() {
  return (
    <div className={s.song}>
      <div className={s.song_details}>
        <span className={s.song_details_index}>1</span>
        <img
          src="https://res.cloudinary.com/dx3tdf3e7/image/upload/v1698668997/auditica-files/tjc7hsju3pndutcvtzdy.jpg"
          alt="test"
        />
        <span className={[s.song_details_name, 'font_regular'].join(' ')}>
          All I Want For Christmas Is You
        </span>
      </div>
      <div className={s.song_artist}>
        <NavLink className={s.song_link} to="artistId">
          Maria Carey
        </NavLink>
      </div>
      <div className={s.song_playlist}>
        <NavLink className={s.song_link} to="albumId">
          Album
        </NavLink>
      </div>
      <div className={s.song_addToFavorites}>
        <span className={s.song_duration}>3:54</span>
        <LikeBtn style={{ width: 40, height: 35 }} />
      </div>
    </div>
  );
}
