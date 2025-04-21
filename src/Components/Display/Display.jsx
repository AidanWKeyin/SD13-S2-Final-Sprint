import React, { useState } from 'react'
import './Display.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const Display = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='display'>
        <div className="display-left">
            <div className="display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display-img">
                <img className="display-main-img" src={product.image} alt=''/>

            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="display-right-prices">
                <div className="display-right-price-old">${product.old_price}</div>
                <div className="display-right-price-new">${product.new_price}</div>
            </div>
            <div className="display-right-description">
                A breathable, lightweight, and comfortable shirt that is perfect for any occasion. Made with high-quality materials, this shirt is designed to keep you cool and comfortable all day long. Whether you're dressing up for a special event or just running errands, this shirt is the perfect choice.
            </div>
            <div className="display-right-size">
                <h1>Select Size</h1>
                <div className="display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XX1</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='display-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>    
            <p className='display-right-category'><span>Tags :</span>Modern , Latest</p>     
            </div>
    </div>
  )
}




