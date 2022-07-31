import React from 'react';

const Card = ({ icon, title, subtitle }) => {
  return (
    <article className='about__card'>
      {icon}
      <h5 className='about__card-title'>{title}</h5>
      <small className='about__card-subtitle'>{subtitle}</small>
    </article>
  );
};

export default Card;
