import React from 'react';
import './Categories.css';


import Prescription from '../../assets/Images/Prescription.png';
import BabyCare from '../../assets/Images/Babycare.jpg';
import SkinCare from '../../assets/Images/Skincare.jpg';
import Vitamins from '../../assets/Images/Vitamins.jpg';
import FirstAid from '../../assets/Images/FirstAid.jpg';





const categories = [
  "Medicines",
  
  "Vitamins",
  "First Aid",
  "Personal",
  "Baby Care",
  "Wellness",
  "Herbal",
  "Devices",
  "OTC",
  "Skin Care"
];

const imageLinks = {
  "Medicines":Prescription,
  "Vitamins": Vitamins,
  "First Aid":FirstAid,
  "Personal": SkinCare,
  "Baby Care":BabyCare,
  "Wellness": SkinCare,
  "OTC": Vitamins,
  "Herbal": SkinCare,
  "Devices": FirstAid,
  "Skin Care":SkinCare
};






function Categories() {
  return (
    <div className='categories-main-cont'>

    <h2>Select Medicine Category</h2>
      <div className='categories-cont'>
        {
          categories.map((category)=>(
          
            <div className='category-cont'>
            <div className='category-img-cont'>
                <img src={imageLinks[category]}/>
              </div>
              <p>{category}</p>
              
              

            </div>

          ))
        }

      </div>
    </div>
  )
}

export default Categories