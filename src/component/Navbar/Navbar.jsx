import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(useGSAP);

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

    const navigate = useNavigate();

    const handleBasketClick = () => {
        navigate('/placeorder');
    };

  useGSAP(() => { 
       const tl = gsap.timeline();

    tl.from('.navbar', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    tl.from(
      '.navbar-menu a',
      {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
      },
      '-=0.5'
    );

    tl.from(
      '.navbar-right img, .navbar-right button',
      {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
      },
      '-=0.3'
    );
  }, []); 

  return (

<div className="navbar">

      <img src={assets.logo} alt="" className="log" />
      <ul className="navbar-menu">
        <a
          href="#explore-menu"
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          menu
        </a>
        <a
          href="#"
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
                <div className="navbar-search_icon" onClick={handleBasketClick}>
                    <img src={assets.basket_icon} alt="Basket Icon" />
                    <div className="dot"></div>
                 </div>

        <button onClick={() => setShowLogin(true)}>signin</button>
      </div>
    </div>
  );
};

export default Navbar;
