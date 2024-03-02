import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ projectName, establishedDate, images }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };

  return (
    <div className="mb-10">
      <div className="flex justify-end mx-10 shadow-md p-10 rounded-lg">
        <div className="flex flex-col w-[40%] gap-10 items-start justify-start ">
          <h1 className="font-jost text-4xl ">{projectName}</h1>
          <h2 className="font-jost text-2xl text-neutral-500">
            {establishedDate}
          </h2>
        </div>
        <div className="flex overflow-x-auto w-[60%] whitespace-nowrap">
          <div className="flex space-x-4 p-4">
            {images.map((item) => (
              <div key={item.id} className="w-64">
                <img
                  src={item.url}
                  alt={`carousel-item-${item.id}`}
                  className="w-full h-48 object-cover rounded-sm"
                />
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="mx-2 p-2 rounded-lg font-semibold text-blue-100 bg-sky-500 hover:bg-sky-400 hover:text-white transition duration-200 ease-in-out"
          onClick={() => handleLearnMoreClick("/projectdetails")}
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
