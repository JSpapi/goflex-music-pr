import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '@assets/content-icons/menu_duo.svg';
import menuIconActive from '@assets/content-icons/menu_duo_active.svg';
import { useLockedBody } from 'usehooks-ts';
import s from './PlaylistSongResponsive.module.scss';
import { SongResponsiveMenu } from '../songResponsiveMenu/SongResponsiveMenu';

export function PlaylistSongResponsive() {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useLockedBody(false);

  const handleClickOpen = () => {
    setOpen(true);
    setLocked(!locked);
  };

  const handleClose = () => {
    setOpen(false);
    setLocked(!locked);
  };
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
        <button type="button" onClick={handleClickOpen}>
          <img src={menuIcon} alt="menu" />
        </button>
      </div>

      <SongResponsiveMenu handleClose={handleClose} open={open} />
    </div>
  );
}
