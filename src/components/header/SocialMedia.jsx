import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/nicol%C3%A1s-ariel-cinzer-365b7b183/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/nicolasCinzer'
        target='_blank'
        rel='noreferrer'
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
