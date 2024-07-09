import React, { useState,useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Hero.css';
import OrderMedicineImg from '../../assets/Images/OrderMedicine.png';
import PrevOrderImg from '../../assets/Images/PreviousOrder.png'; 
import Poster1 from '../../assets/Images/Poster1.png';
import Poster from '../../assets/Images/Poster.png'
import {Icon} from '@iconify/react';
import { medicines } from './Medicines';

function Hero() {
  const images = [Poster, Poster, Poster, Poster, Poster];
  const images1=[Poster1,Poster1,Poster1,Poster1,Poster1];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [isUploaded,setIsUploaded]=useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    if (value) {
      const filtered = medicines.filter(medicine =>
        medicine.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMedicines(filtered);
    } else {
      setFilteredMedicines([]);
    }
  };

  const handleMedicineClick = (medicine) => {
    setSearchTerm(medicine);
    setFilteredMedicines([]);
  };



  const fileInputRef = React.useRef(null);

  const handleClick = () => {
      fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          toast.promise(
              dummyUploadFile(file),
              {
                  loading: 'Uploading...',
                  success: <b>Prescription Uploaded!</b>,
                  error: <b>Could not upload.</b>,
              }
          ).finally(() => {
             
            fileInputRef.current.value = '';
          });
      }
  };

  const dummyUploadFile = (file) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
             
              const isSuccess = Math.random() > 0.5;
              if (isSuccess) {
                  resolve();
              } else {
                  reject(new Error('Upload failed'));
              }
          }, 2000); 
      });
  };


  

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);


    const handleDotClick = (index) => {
      setCurrentIndex(index);
  };
    
  return (
    <div className='hero-main-cont'>
      <Toaster
      position="top-center"
      reverseOrder={false}/>
      <div className='order-prev-order-conatiner'>
        <p className='wayl-text'>
          What are you looking for ?
        </p>
        <div className='order-medicine-btn-cont'>
          <img src={OrderMedicineImg} alt='order-medicines-in-online'/>
          <p>Order Medicines</p>

        </div>
        <div className='prev-order-btn-cont'>
          <img src={PrevOrderImg} alt='order-medicines-in-online'/>
          <p>Previous Orders</p>

        </div>

      </div>

      <div className='search-bar-upload-presc-cont'>
        <div className='search-cont'>

       

        <div className='search-bar-cont'>
          <input type='text'
          placeholder='Search for a medicine..' 
          value={searchTerm}
          onChange={handleSearchChange}/>
          <div className='search-icon-cont'>
             <Icon icon="fluent:search-20-regular"  className='search-icon' />

          </div>
        </div>

        
        {filteredMedicines.length > 0 && (
        <div className='search-list'>
          {filteredMedicines.map((medicine, index) => (
            <div className='search-item'
              key={index}
              onClick={() => handleMedicineClick(medicine)}
            
            >
              {medicine}
            </div>
          ))}
        </div>
      )}

          

        
        </div>

        <div className='upload-presc-btn-cont' onClick={handleClick}>
           
            <p>Upload Prescription</p>
            <input type='file'
            ref={fileInputRef}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{ display: 'none' }}/>
          
            <Icon icon="streamline:upload-circle-solid" className='upload-icon'  />

        </div>



      </div>

      <div className='slider-container'>
            <div className='slider-track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {(window.innerWidth>950?images:images1).map((image, index) => (
                    <img key={index} src={image} alt={`slide-${index}`} className='slide' />
                ))}
            </div>
        </div>
        <div className='dots-container'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
            <div className='mobile-menu-cont'>
                <Icon icon="ion:home-outline"  className='mobile-menu-icon' />
                <Icon icon="fluent-mdl2:product"  className='mobile-menu-icon'  />
                <Icon icon="mdi:user-outline"  className='mobile-menu-icon'  />

            </div>

    </div>
  )
}

export default Hero