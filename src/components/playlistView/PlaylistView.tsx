import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PlaylistView.module.scss';

interface IProps {
  titleText: string;
  linkText?: string;
  playIcon?: string;
  pauseIcon?: string;
}

export function PlaylistView({
  titleText,
  linkText,
  playIcon,
  pauseIcon,
}: IProps) {
  const [isPlayed, setIsPlayyed] = useState(false);
  return (
    <div className={s.playlistView}>
      <div className={s.playlistView_title}>
        <h2>{titleText}</h2>

        {playIcon ? (
          <button type="button" onClick={() => setIsPlayyed(!isPlayed)}>
            <img src={isPlayed ? pauseIcon : playIcon} alt="play icon" />
          </button>
        ) : null}
      </div>

      {linkText ? (
        <NavLink className={s.playlistView_link} to="/">
          {linkText}
        </NavLink>
      ) : null}
    </div>
  );
}
