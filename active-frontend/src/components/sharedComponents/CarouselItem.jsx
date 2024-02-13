import React from 'react';

const CarouselItem = ({ image }) => (
  <div>
    <div className="rounded-md flex transition-transform transform hover:scale-100 duration-800 ease-out cursor-pointer h-[400px]">
      <img src={image.url} alt={image.id} className='w-full h-full object-fit p-10' />
    </div>
  </div>
);

export default CarouselItem;
