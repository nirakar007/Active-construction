import React from "react";
import { useNavigate } from "react-router-dom";

function SurveyPlotH() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-10 font-jost">
              Survey & Plot
            </h1>
            <p className="font-normal text-neutral-500">
              Exemplary Land Plotting and Survey Services.
            </p>
            <p className="font-medium mt-2 text-neutral-800">
              No stones unturned.
            </p>
            <div className="flex gap-5">
              <h2 className="text-2xl font-md text-orange-600 mt-2">
                It just keeps getting better
              </h2>
            </div>
          </div>
        </div>
        <div
          className="mt-10 w-full border cursor-pointer overflow-hidden"
          onClick={() => handleLearnMoreClick("/surveyplot")}
        >
          <img src="src/assets/images/survey.jpg" alt="image" className="w-[500px] transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110" />
        </div>
      </div>
    </div>
  );
}

export default SurveyPlotH;
