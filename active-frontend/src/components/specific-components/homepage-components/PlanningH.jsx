import React from "react";
import { useNavigate } from "react-router-dom";

function PlanningH() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };
  return (
    <div>
        <div>
            <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-medium mb-10 font-jost">Planning</h1>
                <div className="flex gap-5">
                </div>
                <p className="font-normal text-neutral-500 mb-2"> Adaptability and Efficiency in Every Detail.</p>
                <h2 className="text-2xl font-semibold text-blue-600">Foolproof Planning.</h2>
            </div>
            </div>
            <div className="mt-10 w-full h-[50vh] border cursor-pointer"
            onClick={() => handleLearnMoreClick("/planning")}>

            </div>
        </div>
    </div>
  );
}

export default PlanningH;
