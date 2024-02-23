import React from "react";
import images from "../components/data/wip_sliderImgs";
import Footer from "../components/specific-components/Footer";
import ContactForm from "../components/specific-components/ContactForm";
import Reveal from "../animation/Reveal";
function Gallery() {
  const interiorImages = images.filter(
    (image) => image.category === "interior"
  );
  const exteriorImages = images.filter(
    (image) => image.category === "exterior"
  );

  const render = (imageArray, keyPrefix) => (
    <div className={`w-full h-[70h] overflow-x-auto`} key={keyPrefix}>
      <div className="grid grid-cols-3 gap-2 p-10">
        {imageArray.map((image) => (
          <div
            className="relative border-4 border-white hover:scale-105 transition duration-200 overflow-hidden aspect-w-1 aspect-h-1"
            key={`${keyPrefix}-${image.id}`}
          >
            <img
              src={image.url}
              alt={`img-${image.id}`}
              className="w-[500px] h-[500px] object-cover transform hover:translate-y-1 transition duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Reveal>
      <div className="m-10">
        <span className="flex justify-center my-4">
          <h1 className="font-jost text-6xl text-neutral-700">Interior</h1>
        </span>
        <div className="shadow-md p-2">
        {render(interiorImages, "interior")}
        </div>
      </div>
      </Reveal>

      <Reveal>
      <div className="m-10 mt-32">
        <span className="flex justify-center my-6">
          <h1 className="font-jost text-6xl text-neutral-700">Exterior</h1>
        </span>
        <div className="shadow-md p-2">
        {render(exteriorImages, "exterior")}
        </div>
      </div>
      </Reveal>
      
      <ContactForm/>
      <Footer />

    </div>
  );
}

export default Gallery;
