import React from 'react';
import './Footer.css';
import {Icon} from '@iconify/react'

function Footer() {
  return (
    <div className='footer-main-cont'>
    
      <div className='footer-cont'>
          <div className='footer-about-us'>
            <h2>Sri Hari Medical Stores</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed incidunt odit soluta impedit reprehenderit magnam
                minus totam velit similique maiores.
            </p>

          </div>

         

          <div className='footer-list'>
            <h3>Useful Links</h3>
            <p>About Us</p>
            <p>Branches</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          
          </div>

          <div className='footer-list'>
            <h3>Help</h3>
            <p>Contact Us</p>
            <p>Help & Support</p>
            <p>FAQ's</p>
        
          </div>

          <div className='footer-list'>
            <h3>Download</h3>
            <p>Ios</p>
            <p>Android</p>
            
        
          </div>




      </div>

      <div className='footer-social-cont'>
        <div >
            <Icon icon="uil:facebook-f" className='social-icon'/>
        </div>
        <div>
        <Icon icon="ant-design:instagram-filled" className='social-icon'/>
        </div>
        <div>
           <Icon icon="ri:twitter-x-fill"  className='social-icon'/>
        </div>
        <div>
           <Icon icon="mdi:youtube" className='social-icon'/>
        </div>

      </div>

      <div className='footer-copyright'>
           © Sri Hari Medical Stores, 2024. All rights reserved.
      </div>

     
    </div>
  )
}

export default Footer