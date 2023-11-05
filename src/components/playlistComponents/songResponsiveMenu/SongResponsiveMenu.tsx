import { LikeBtn } from '@components/likeBtn/LikeBtn';
import React from 'react';
import {
  PlaylistAdd,
  LibraryMusic,
  AudiotrackOutlined,
} from '@mui/icons-material';
import s from './SongResponsiveMenu.module.scss';

interface IProps {
  handleClose: () => void;
  open: boolean;
}

export function SongResponsiveMenu({ handleClose, open }: IProps) {
  return (
    <div
      className={
        open ? [s.responsiveMenu, s.active].join(' ') : s.responsiveMenu
      }
    >
      <div className={s.responsiveMenu_container}>
        <div className={s.responsiveMenu_content}>
          <div className={s.responsiveMenu_content_header}>
            <img
              src="https://res.cloudinary.com/dx3tdf3e7/image/upload/v1698668997/auditica-files/tjc7hsju3pndutcvtzdy.jpg"
              alt="test"
            />
            <div className={s.responsiveMenu_content_info}>
              <h4 className={s.responsiveMenu_content_artist}>
                Post Malone
                <LikeBtn style={{ width: 50, height: 30 }} />
              </h4>
              <h4 className={s.responsiveMenu_content_name}>White Iverson</h4>
            </div>
          </div>
          <ul className={s.responsiveMenu_content_list}>
            <li>
              <PlaylistAdd fontSize="large" /> Add to playlist list
            </li>
            <li>
              <LibraryMusic fontSize="large" /> Go to playlist
            </li>
            <li>
              <AudiotrackOutlined fontSize="large" /> Go to track
            </li>
          </ul>
        </div>
        <button
          type="button"
          className={s.responsiveMenu_closeBtn}
          onClick={handleClose}
        >
          Hide
        </button>
      </div>
    </div>
  );
}
