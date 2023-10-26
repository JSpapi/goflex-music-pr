import React, { useState } from 'react';
import sliderMenu from '@assets/content-icons/more_horizontal.svg';

import { HorizontalMoreinfo } from '@components/horizontalMoreinfo/HorizontalMoreinfo';
import { LikeBtn } from '@components/likeBtn/LikeBtn';
import { ISong } from 'types/song.type';
import s from './VerticalSliderItem.module.scss';

interface IProps {
  song: ISong;
}
export function VerticalSliderItem({ song }: IProps) {
  // !CODE FOR SEPARATING ARTIST NAME FROM SONG NAME
  const ind = song.name.indexOf('-');
  const artistName = song.name.slice(0, ind + 1);
  const songname = song.name.slice(ind + 1);

  return (
    <>
      <div className={s.slider_img}>
        <img src={song.thumbnail} alt={song.name} />
      </div>
      <div className={s.slider_song}>
        <h4 className={s.slider_song_title}>FEATURED SONGS</h4>
        <h2 className={s.slider_song_name}>
          {artistName}
          <span>
            <br />
            {songname}
          </span>
        </h2>

        <div className={s.slider_song_controllers}>
          <HorizontalMoreinfo menuIcon={sliderMenu} />
          <LikeBtn style={{ width: 45, height: 45 }} />

          <button className={s.slider_song_controllers_playBtn} type="button">
            Play
          </button>
        </div>
      </div>
    </>
  );
}
