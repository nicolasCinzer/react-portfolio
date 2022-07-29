import React from 'react';
import CV from '../../assets/cv.pdf';

const Buttons = () => {
  return (
    <div className='buttons'>
      <a href={CV} download>Download CV</a>
      <a href='#contact'>Reach me out!</a>
    </div>
  );
};

export default Buttons;
