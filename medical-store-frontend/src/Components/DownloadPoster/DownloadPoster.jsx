import React from 'react';
import './DownloadPoster.css';
import DownloadPosterImg from '../../assets/Images/DownloadPoster.png'

function DownloadPoster() {
  return (
    <div className='download-poster-cont'>
        <img src={DownloadPosterImg}/>
    </div>
  )
}

export default DownloadPoster