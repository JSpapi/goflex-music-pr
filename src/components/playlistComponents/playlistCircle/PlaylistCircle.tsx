import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PlaylistCircle.module.scss';

export function PlaylistCircle() {
  return (
    <NavLink to="/" className={s.playlist_circle}>
      <div className={s.playlist_circle_img}>
        <img
          src="https://res.cloudinary.com/dx3tdf3e7/image/upload/v1698668253/auditica-files/amn5xlk5ovynbmynhkrm.jpg"
          alt="cirlce"
        />
      </div>
      <div className={s.playlist_circle_info}>
        <h4>Way Back Home</h4>
        <NavLink to="/test" className="font_subregular">
          SHAUN
        </NavLink>
      </div>
    </NavLink>
  );
}
