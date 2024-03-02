import React, { useEffect } from 'react';
import Gallery from './Gallery';
import Reveal from '../animation/Reveal';

function WorkInProgress() {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <span>
      <h1 className='font-jost px-16 text-xl mt-10 animate-bounce text-green-600'>Ongoing projects:</h1>
      </span>
      <Reveal>
      <Gallery/>
      </Reveal>
      </div>

  )
}

export default WorkInProgress