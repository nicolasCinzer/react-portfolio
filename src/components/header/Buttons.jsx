import React from 'react';
import CV from '../../assets/cv.pdf';

const Buttons = () => {
  return (
    <div className='buttons'>
      <a href={CV} className='btn' download>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>Reach me out!</a>
    </div>
  );
};

export default Buttons;
