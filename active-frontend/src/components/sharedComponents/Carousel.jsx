import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import CarouselItem from './CarouselItem';

const Carousel = ({ images }) => {
  const swiperNavigationStyles = {
    '--swiper-navigation-size': '44px',
    '--swiper-navigation-top-offset': '50%',
    '--swiper-navigation-sides-offset': '30px',
    '--swiper-navigation-color': 'var(--swiper-theme-color)',
  };
  return (
    <Swiper
        slidesPerView={4}
        grabCursor={true}
        autoplay={{
          delay:1000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          type:'progressbar',
        }}
        navigation={true}
        style={swiperNavigationStyles}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-[1200px] h-[60vh]"
      >
      {images.slice(0,5).map((image) => (
        <SwiperSlide key={image.id} className="overflow-hidden">
          <div className="p-4 w-[500px] h-[500px]">
            <CarouselItem image={image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
