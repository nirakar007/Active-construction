import React from 'react';

function ImageGrid({ imageDataset }) {
  return (
    <div className="w-full h-[50vh] overflow-x-auto">
      <div className={`grid grid-cols-4 gap-2 p-2`}>
        {imageDataset.map((image) => (
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
