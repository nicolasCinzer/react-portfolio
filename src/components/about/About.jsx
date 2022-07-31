import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import Card from './Card';
import { FaAward } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
      
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={Me} alt='Me' />
          </div>
        </div>
      
        <div className='about__content'>
          <div className='about__cards'>
            <Card
              icon={<FaAward className='about__card-icon' />}
              title='Experience'
              subtitle='2+ Years Working'
            />
            <Card
              icon={<FaUserFriends className='about__card-icon' />}
              title='Clients'
              subtitle='300+ Worldwide'
            />
            <Card
              icon={<FaProjectDiagram className='about__card-icon' />}
              title='Projects'
              subtitle='80+ Completed'
            />
          </div>
          <p className='about__content-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            doloribus consectetur a, cupiditate asperiores quo exercitationem,
            accusamus veritatis possimus officia temporibus deserunt vel aliquid
            provident, hic tenetur aut ipsum quisquam.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
