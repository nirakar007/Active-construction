import React from 'react';
import images from '../data/wip_sliderImgs';

function ImageGrid() {
  const numColumns = images.length >= 2 ? 2 : 1; // Set a minimum of 2 columns

  return (
    <div className="w-full h-[50vh] overflow-x-auto">
      <div className={`grid grid-cols-${numColumns} gap-2 p-4`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="relative border-4 border-white hover:scale-105 transition duration-200 overflow-hidden aspect-w-1 aspect-h-1"
          >
            <img
              src={image.url}
              alt={`img-${image.id}`}
              className="w-[200px] h-[200px] object-cover transform hover:translate-y-1 transition duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
