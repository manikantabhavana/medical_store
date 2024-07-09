import React from 'react';
import './Login.css';
import LoginImg from '../../assets/Images/Login.png';
import Logo from '../../assets/Images/Logo.png'

function Login() {
  return (
    <div className='login-main-cont'>
      <div className='login-left-cont'>
        <img src={Logo} alt='sri-hari-medical-stores'/>
        <h4>Welcome to Sri hari medical store</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Omnis vitae cumque magnam libero quod ut.</p>
        <img src={LoginImg} alt='sri-hari-medical-store-login'/>

      </div>

      <div className='login-right-cont'>
        <p>Sign In</p>
        <div class="input-container">
            <input placeholder="Enter Name" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Enter Name</label>
            <span class="input-highlight"></span>
         </div>
         <div class="input-container">
            <input placeholder="Enter Mobile" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Enter Mobile</label>
            <span class="input-highlight"></span>
         </div>

         <button>Send Otp</button>


      </div>

    </div>
  )
}

export default Login