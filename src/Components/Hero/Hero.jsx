import React from 'react'
import './Hero.css'

import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/WM1.avif'

export const Hero = () => {
  return (
    
    // <div className="hero-container">
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>New</p>
                        {/* <img src={hand_icon} alt="" />  */}
                    </div>
                    <p>Clothing</p>
                    <p>for everyone</p>
                </div>
                <div className="hero=latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />



           
            </div>
        </div>

            
  )
}
