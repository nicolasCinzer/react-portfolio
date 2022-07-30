import React from 'react';
import './header.css';
import Buttons from './Buttons';
import SocialMedia from './SocialMedia';
import Me from  '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey buddy! I'm</h5>
        <h1>Nicolas Cinzer</h1>
        <h5 className='text-light'>Fullstack Blockchain Developer</h5>
        <Buttons />
        <SocialMedia />
        
        {/* PNG image */}
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
