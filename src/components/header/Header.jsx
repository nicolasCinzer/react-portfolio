import React from 'react';
import './header.css';
import Buttons from './Buttons';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey buddy! I'm</h5>
        <h1>Nicolas Cinzer</h1>
        <h5 className='text-light'>Fullstack Blockchain Developer</h5>
        <Buttons />
      </div>
    </header>
  );
};

export default Header;
