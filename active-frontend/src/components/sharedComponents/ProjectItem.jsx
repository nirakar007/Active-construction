import React from 'react';

const ProjectItem = ({ image }) => (
  <div>
    <div className="rounded-md flex transition-transform transform hover:scale-100 duration-800 ease-out cursor-pointer h-[400px]">
      <img src={image.url} alt={image.id} className='w-full h-full object-fill' />
    </div>
  </div>
);

export default ProjectItem;
