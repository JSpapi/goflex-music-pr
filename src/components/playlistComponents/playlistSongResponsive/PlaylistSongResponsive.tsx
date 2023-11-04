import React from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '@assets/content-icons/menu_duo.svg';
import menuIconActive from '@assets/content-icons/menu_duo_active.svg';
import s from './PlaylistSongResponsive.module.scss';

export function PlaylistSongResponsive() {
  return (
    <div className={s.responsiveSong}>
      <div className={s.responsiveSong_info}>
        <div className={s.responsiveSong_info_img}>
          <img
            src="https://res.cloudinary.com/dx3tdf3e7/image/upload/v1698668997/auditica-files/tjc7hsju3pndutcvtzdy.jpg"
            alt="test"
          />
        </div>
        <div className={s.responsiveSong_info_details}>
          <span>All I Want For Christmas Is You</span>
          <NavLink to="test"> Maria Carey</NavLink>
        </div>
      </div>
      <div className={s.responsiveSong_menu}>
        <button type="button">
          <img src={menuIcon} alt="menu" />
        </button>
      </div>
    </div>
  );
}
