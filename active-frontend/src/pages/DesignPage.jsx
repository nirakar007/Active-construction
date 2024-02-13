import React from "react";
// import Spline from "@splinetool/react-spline";
import Carousel from "../components/sharedComponents/Carousel";
import imagesDesignPage from "../components/data/designPageImages";
import images from "../components/data/wip_sliderImgs";
import GridCarousel from "../components/sharedComponents/GridCarousel";
import ContactForm from "../components/specific-components/ContactForm";
import Footer from "../components/specific-components/Footer";

function DesignPage() {
  return (
    <div>
      <span className="flex justify-center">
      <h1 className="font-light">services/ </h1>
      <h1 className="text-lg">Design</h1>
      </span>
      <div className="flex flex-col gap-5 mx-4">
        {/* <div className="flex items-center justify-center">
          <h1 className="text-sm text-neutral-500">services /</h1>
          <h2 className="text-xl font-bold"> Design</h2>
        </div> */}

        <div className="flex justify-center items-center mt-7 gap-2 textDesign">
          <h1 className="font-jost text-3xl font-semibold">Design</h1>
          <h1 className="font-jost text-3xl font-light">Your Dreams with</h1>
          <h1 className="font-jost text-3xl font-light text-sky-600">Us,</h1>
        </div>

        <div className="mt-10">
          <Carousel images={imagesDesignPage} />
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-2xl font-semibold font-jost ">Interior Design</h1>
          <span className="flex flex-col items-center mt-4 text-lg leading-9">
            <p className="text-neutral-600">
              Transform your spaces into a reflection of your style and comfort.
            </p>
            <p className="text-neutral-600">
              Our experts blend aesthetics and functionality, ensuring your
              interiors are both
            </p>
            <p className="text-neutral-600">stunning and livable.</p>
          </span>
        </div>
        <div>
          <GridCarousel
            images={images.filter((image) => image.category === "interior")}
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-2xl font-semibold font-jost">Exterior Design</h1>
          <span className="flex flex-col items-center mt-4 text-lg leading-9">
            <p className="text-neutral-600">
              Elevate curb appeal with our visionary approach
            </p>
            <p className="text-neutral-600">
              We turn architectural dreams into stunning realities, making a
              lasting impression.
            </p>
          </span>
        </div>
        <div>
          <GridCarousel
            images={images.filter((image) => image.category === "exterior")}
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-3xl font-light font-jost mb-10">Why Us?</h1>
          <div className="px-16 rounded-full">
            <div className="flex flex-col items-center justify-center mb-10 bg-teal-50 p-6 shadow-sm rounded-md">
              <h2 className="font-medium text-xl">Personalized Creativity:</h2>
              <p className="font-light pt-2">
                Collaborate for a design that aligns with your vision.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-10 bg-amber-50 p-6 shadow-sm rounded-md">
              <h2 className="font-medium text-xl">Integrated Approach:</h2>
              <p className="font-light pt-2">
                Seamlessly blend interior and exterior aesthetics.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-10 bg-teal-50 p-6 shadow-sm rounded-md">
              <h2 className="font-medium text-xl">Functional Elegance:</h2>
              <p className="font-light pt-2">
                Prioritize both form and function for practical yet stunning
                spaces.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-10 bg-amber-50 p-6 shadow-sm rounded-md">
              <h2 className="font-medium text-xl">Quality Craftsmanship:</h2>
              <p className="font-light pt-2">
                Ensure longevity with our commitment to quality.
              </p>
            </div>
          </div>

          <div className="flex gap-2 font-jost font-light mt-10 text-xl mb-20">
            <p>Embark on a design journey with</p>
            <p className="text-sky-500 font-normal">Active Construction</p>
            Redefine your spaces with our expert touch.
          </div>
        </div>
        <div className="mb-5">
          <ContactForm />
        </div>
        {/* <div className="flex justify-between">
          <div className="flex rounded-full h-[500px] w-[500px] bg-neutral-50 object-center items-start hover:shadow-lg hover:shadow-sky-100 transition duration-100 ease-in-out">
            <Spline
              scene="https://prod.spline.design/fFOU3SH7zddYtKyG/scene.splinecode"
              className="object-contain h-[200px] w-[200px]"
            />
          </div>
          
        </div> */}
      </div>
        <Footer />
    </div>
  );
}

export default DesignPage;
