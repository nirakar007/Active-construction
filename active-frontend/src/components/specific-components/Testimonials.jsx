import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Krishna Maharjan",
      comment: "Active Construction exceeded my expectations. The attention to detail and commitment to quality are unparalleled.",
    },
    {
      id: 2,
      name: "Ram Shrestha",
      comment: "I am extremely satisfied with the professionalism and efficiency of the Active Construction team. Highly recommended!",
    },
    {
      id: 3,
      name: "Anuj Tamrakar",
      comment: "The craftsmanship displayed by Active Construction turned our house into a dream home. Thank you for your dedication!",
    },
    {
      id: 4,
      name: "Sandip Gupta",
      comment: "Working with Active Construction was a pleasure. They made the entire process smooth and stress-free.",
    },
    {
      id: 5,
      name: "Shyam Maharjan",
      comment: "I couldn't be happier with the results. Active Construction transformed our space into a functional and beautiful environment.",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4 font-jost">Client Testimonials</h1>
      <div className="flex overflow-x-auto">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="max-w-[300px] border border-sky-500 mr-4 p-4 rounded-md shadow-sm hover:shadow-xl hover:shadow-sky-300 transition duration-200 ">
            <p className="text-gray-700 text-sm mb-2">{testimonial.comment}</p>
            <p className="text-gray-600 font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
