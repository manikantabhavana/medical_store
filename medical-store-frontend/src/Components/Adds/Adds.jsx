import React from 'react';
import './Adds.css';
import AddImg from '../../assets/Images/adds.png'

function Adds() {
  return (

    <div className='adds-cont'>
        <h2 >Discounts on Medical Devices</h2>
   
        <div className='adds-main-cont'>

            <div className='add-img-cont'>
                <img src={AddImg}/>

            </div>
            <div className='add-img-cont'>
                <img src={AddImg}/>

            </div>
        </div>
    </div>
  )
}

export default Adds