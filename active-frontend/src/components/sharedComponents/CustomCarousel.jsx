import React from "react";

function CustomCarousel({ images }) {
  return (
    <div>
      <div className="flex overflow-x-auto w-full mx-2 whitespace-nowrap">
        <div className="flex space-x-4 p-4">
          {images.map((item) => (
            <div key={item.id} className="w-64">
              <img
                src={item.url}
                alt={`carousel-item-${item.id}`}
                className="w-full h-48 object-cover rounded-sm hover:shadow-sm transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110"
              />
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomCarousel;
