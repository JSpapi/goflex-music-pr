import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/thumbs';

import { EffectFade, Autoplay, Thumbs } from 'swiper/modules';
import { VerticalSliderItem } from '@components/verticalSliderItem/VerticalSliderItem';

import { useSongs } from '@hooks/useSongs';
import s from './VerticalSlider.module.scss';

export function VerticalSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | {
    destroyed: boolean;
  }>(null);
  const songs = useSongs();

  const bannerPlaylist = [
    { playlist: 'R&B', playlistLink: '' },
    { playlist: 'Pop', playlistLink: '' },
    { playlist: 'K-Pop', playlistLink: '' },
    { playlist: 'Rap', playlistLink: '' },
    { playlist: 'Rock', playlistLink: '' },
    { playlist: 'Hip Hop', playlistLink: '' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        spaceBetween={10}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, EffectFade, Thumbs]}
        className={s.verticalSlider}
      >
        {songs?.map((song) => (
          <SwiperSlide key={song.name} className={s.slider}>
            <VerticalSliderItem song={song} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        className={s.genreSlider}
      >
        {bannerPlaylist.map((genre) => (
          <SwiperSlide key={genre.playlist} className={s.genreSlider_slide}>
            <p className={s.genreSlider_slide_genreName}>{genre.playlist}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
