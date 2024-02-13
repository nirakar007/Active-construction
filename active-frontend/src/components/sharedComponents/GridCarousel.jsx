import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import CarouselItem from './CarouselItem';

const GridCarousel = ({ images }) => {
  return (
    <>
      <Swiper
        // slidesPerView={3}
        // grid={{
        //   rows: 2,
        // }}
        // spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Grid, Pagination]}
        // className="mySwiper"
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={100}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.slice(0, 10).map((image) => (
          <SwiperSlide key={image.id} className="flex items-center justify-center">
            <div className="p-4 w-[500px] h-[500px] overflow-hidden">
              <CarouselItem image={image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GridCarousel;
