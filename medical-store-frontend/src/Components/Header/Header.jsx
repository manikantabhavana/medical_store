import React from 'react';
import './Header.css';
import Logo from '../../assets/Images/Logo.png';
import { Icon } from '@iconify/react';

function Header() {
  return (
    <>
    <header className='header-container'>
      <div className='header-logo-cont'>
        <img src={Logo} className='header-logo' alt='sri-hari-medical-stores-logo' />
      </div>

      <div className='header-right-cont'>
        <div className='header-download-app-cont'>
          <Icon icon="circum:mobile-2" className='header-mobile-icon' />
          <p>Download app</p>
        </div>

        <div className='header-login-cont'>
          <Icon icon="mdi:user" className='header-login-icon' />
          <div>
            <p>Log in</p>
            <span>.</span>
          </div>
        </div>

        <Icon icon="fa-solid:shopping-cart" className='header-cart-icon' />
      </div>
    </header>
   
    </>
  );
}

export default Header;
