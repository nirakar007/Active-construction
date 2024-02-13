// Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import CarouselItem from './CarouselItem';

const Carousel = ({ images }) => {
  return (
    <Swiper
        slidesPerView={2}
        // spaceBetween={}
        grabCursor={true}
        autoplay={{
          delay:1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          type:'progressbar',
        }}
        navigation={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 50,
        //   },
        // }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-[1200px] h-[60vh]"
      >
      {images.slice(0,5).map((image) => (
        <SwiperSlide key={image.id} className="flex items-center justify-center">
          <div className="p-4 w-[600px] h-[600px]">
            <CarouselItem image={image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
