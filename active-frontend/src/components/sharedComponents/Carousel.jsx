import React from 'react';
import { Swiper } from 'swiper/react';
import images from '../data/wip_sliderImgs';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Assuming CarouselItem is a separate component for individual items
const CarouselItem = ({ item }) => (
  <div key={item.id} className='hover:scale-50'>
    <div className="border border-gray-10 shadow-custom-nav-shadow rounded-md flex transition-transform transform hover:scale-105 duration-500 ease-out cursor-pointer">
      <img src={item.url} alt={item.id} className='w-full h-full object-cover' />
    </div>
  </div>
);

const Carousel = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <div className="flex justify-start flex-wrap gap-3 pl-1">
      {images
        ?.filter((item) => item.category === 'interior')
        ?.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
    </div>
  </Swiper>
);

export default Carousel;
