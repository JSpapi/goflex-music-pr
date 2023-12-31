import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PlaylistCard.module.scss';

export function PlaylistCard() {
  return (
    <NavLink to="/" className={s.playlist_card}>
      <div className={s.playlist_card_img}>
        <img
          src="https://res.cloudinary.com/dx3tdf3e7/image/upload/v1698669050/auditica-files/y1lwpagnyoxofhwxzmd4.jpg"
          alt="test"
        />
      </div>
      <div className={s.playlist_card_info}>
        <h4>Red (Taylor&apos;s Version)</h4>
        <NavLink to="/test" className="font_subregular">
          Taylor Swift
        </NavLink>
      </div>
    </NavLink>
  );
}
