import { PlaylistCard } from '@components/playlistComponents/playlistCard/PlaylistCard';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './PlaylistCardsCarousel.module.scss';

// interface IProps [
//   playlists
// ]

export function PlaylistCardsCarousel() {
  return (
    <div className={s.playlists_carousel}>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={25}
        className="mySwiper"
        breakpoints={{
          1880: {
            slidesPerView: 6.3,
          },
          1500: {
            slidesPerView: 5.3,
          },
          1024: {
            slidesPerView: 4.3,
          },
          768: {
            slidesPerView: 3.3,
          },
        }}
      >
        {Array.from({ length: 10 }).map((index) => (
          <SwiperSlide key={index}>
            <PlaylistCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
