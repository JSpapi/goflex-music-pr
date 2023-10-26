import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper/modules';
import { VerticalSliderItem } from '@components/verticalSliderItem/VerticalSliderItem';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import { ISong } from 'types/song.type';
import s from './VerticalSlider.module.scss';

interface IProps {
  data: ISong[];
}

export function VerticalSlider({ data }: IProps) {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides
        effect="fade"
        loop
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, EffectFade]}
        className={s.verticalSlider}
      >
        {data.map((song) => (
          <SwiperSlide key={song.name} className={s.slider}>
            <VerticalSliderItem song={song} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}
