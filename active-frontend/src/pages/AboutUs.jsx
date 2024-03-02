import React from "react";
import Reveal from "../animation/Reveal";
import ContactForm from "../components/specific-components/ContactForm";
import Footer from "../components/specific-components/Footer";
import Testimonials from "../components/specific-components/Testimonials";

function AboutUs() {
  return (
    <div>
      <Reveal>
        <div className="flex m-10 px-20">
          <div className="flex flex-col items-center">
            <div className="w-[300px] h-[300px] border m-10 px-2">
              <img
                src="src/assets/images/"
                alt="picture of the ceo"
                className="w-[300px] rounded-full shadow-sky-100"
              />
            </div>
            <h1 className="font-jost font-medium">CEO</h1>
            <h1 className="font-jost text-lg">Er. Rameswor Suwal</h1>

          </div>
          <div className="flex flex-col gap-10">
            <h1 className="flex flex-col gap-2 items-center justify-center text-3xl font-jost">
              <h2 className="text-neutral-700 font-medium">Welcome to</h2>
              <h2 className="font-medium text-sky-500">Active Construction,</h2>
            </h1>
            <div className="flex items-center justify-center gap-20 w-full">
              <p className="text-neutral-600 text-lg px-4 mb-2">
                where we transform your dreams into the architectural
                masterpieces you envision. With an unwavering commitment to
                excellence, we seamlessly navigate every step of the home
                creation journey – from land measurement and surveying to the
                final touches of interior design and landscaping. Here, we take
                pride in offering a comprehensive suite of services that go
                beyond construction, encompassing every nuance of crafting a
                space that feels like home.
                <br />
                <br />
                Our meticulous approach to each project reflects our dedication
                to precision, ensuring that every inch of your space is designed
                for optimal efficiency and comfort. From the intricate details
                of interior and exterior design to the essential aspects of
                plotting and blueprint creation, we handle it all. At Active
                Construction, we believe in delivering high-quality
                craftsmanship without compromising on affordability, making your
                dream home a reality within budget.
              </p>
            </div>
            <div className="mt-4 flex justify-center ">
              <div className="flex flex-col gap-1">
                <h2 className="text-neutral-500 font-jost text-3xl mb-2">
                  List of all what we do:{" "}
                </h2>
                <h3>- Land Measurement and Surveying</h3>
                <h3>- Plotting </h3>
                <h3>- Planning and Blueprint making</h3>
                <h3>- Structural Design</h3>
                <h3>- Exterior Design</h3>
                <h3>- Interior Design</h3>
                <h3>- Wiring, Welding, Furnishing, Plumbing</h3>
                <h3 className="text-xl px-2 text-green-400 font-bold">
                  A Complete Home.{" "}
                </h3>
                <h2 className="mt-10 text-neutral-500 font-jost text-3xl mb-2">
                  What we are known for :{" "}
                </h2>
                <h3>- Trustworthy Services</h3>
                <h3>- Affordable Pricing</h3>
                <h3>- Dream-to-Reality Transformation</h3>
                <h3>- Efficiency and Comfort Focus</h3>
                <h3>- High-Quality Production</h3>
                <h3>- Client-Centric Approach</h3>
                <h3>
                  - Customer-Friendly interactions, Top-Notch Customer Service
                </h3>
                <h3>- Timeless Craftmanship</h3>
                <h3>- Making Unique Art out of Unique Land Structures</h3>
                <h3 className="flex justify-center font-jost text-4xl m-16">
                  Complete Home Solutions at{" "}
                  <h3 className="font-medium text-sky-500 px-2">
                    Active Construction
                  </h3>
                </h3>
                <div className="mt-10">
                  <Testimonials/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-10">
          <ContactForm />
        </div>
      </Reveal>
      <Footer />
    </div>
  );
}

export default AboutUs;
