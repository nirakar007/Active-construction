import React from "react";
import Reveal from "../animation/Reveal";
import ImageGrid from "../components/sharedComponents/ImageGrid";

function ConstructionPage() {
  return (
    <div>
      <span className="flex justify-center">
        <h1 className="font-light">services/ </h1>
        <h1 className="text-lg">Construction</h1>
      </span>
      <div className="flex flex-col items-center justify-center mt-5">
        <Reveal>
          <h1 className="text-4xl font-light font-jost justify-center flex textConstruct">
            Making Your House, a Home.
          </h1>
          <span className="flex flex-col items-center mt-4 text-base leading-9">
            <p className="text-neutral-600">
              Crafting Excellence with Well-Thought Precision,
            </p>
            <p className="text-neutral-600">
              Using the Best Materials for Durable and Long-Lasting
              Constructions
            </p>
            <p className="text-neutral-600">stunning and livable.</p>
          </span>
        </Reveal>
        <Reveal>
          <div className="mt-10">
            <ImageGrid />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ConstructionPage;
