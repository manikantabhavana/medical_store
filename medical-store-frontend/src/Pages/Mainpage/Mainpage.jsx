import React from 'react';
import './Mainpage.css'

import Hero from '../../Components/Hero/Hero';
import Categories from '../../Components/Categories/Categories';
import Adds from '../../Components/Adds/Adds';
import DownloadPoster from '../../Components/DownloadPoster/DownloadPoster';

function Mainpage() {
  return (
    <div>
        <Hero/>
        <Categories/>
        <Adds/>
        <DownloadPoster/>
    </div>
  )
}

export default Mainpage