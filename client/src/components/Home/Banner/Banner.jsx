import React from 'react';
import BannerImg from "../../../assets/banner-img.png";
import "./Banner.scss";
export const Banner = () => {
  return (
    <div className='hero-banner'>
      <div className="content">
        <div className="text-content">
         <h1>SALES</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloremque sapiente voluptates debitis quis. Ullam,</p>
         <div className="ctas">
          <div className='banner-cta'>Read More</div>
          <div className='banner-cta v2'>Shop Now</div>
         </div>
        </div>
        <img className="banner-img " src={BannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner;