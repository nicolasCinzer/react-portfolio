import React, { useState } from 'react';
import './nav.css';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLaptop } from 'react-icons/ai';
import { AiOutlineFileDone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Nav = () => {
  const [active, setActive] = useState('#');
  
  return (
    <nav>
      <a
        href='#'
        className={active === '#' ? 'active' : ''}
        onClick={() => setActive('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={active === '#about' ? 'active' : ''}
        onClick={() => setActive('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={active === '#experience' ? 'active' : ''}
        onClick={() => setActive('#experience')}
      >
        <AiOutlineLaptop />
      </a>
      <a
        href='#portfolio'
        className={active === '#portfolio' ? 'active' : ''}
        onClick={() => setActive('#portfolio')}
      >
        <AiOutlineFileDone />
      </a>
      <a
        href='#contact'
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
      >
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default Nav;
