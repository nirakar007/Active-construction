import React from 'react'
import { useNavigate } from 'react-router-dom';

function ConstructionH() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };
  return (
    <div className='mb-20'>
        <div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-10 font-jost">Construction</h1>
            <div className="flex gap-5">
              <h2 className="text-2xl font-semibold text-blue-900">That's right</h2>
            </div>
            <p className="font-normal text-neutral-500 mt-2">Materials from cement and bricks to custom furnitures, we do it.</p>
            <p className="font-medium mt-2">All in one.</p>
          </div>
        </div>
          <div className="mt-10 w-full cursor-pointer overflow-hidden"
          onClick={() => handleLearnMoreClick("/construction")}>
            <img src="src/assets/banasthali_wip/exterior/construction2.gif" alt="image" className='w-[500px] transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110' />
          </div>
      </div>
    </div>
  )
}

export default ConstructionH