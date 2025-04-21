import React from 'react'
import './Products.css'
import { Item } from '../Item/Item'
import data_product from '../Assets/data'


export const Products = () => {
  return (
    <div className='products'>
        <h1>Telated Products</h1>
        <hr />
        <div className="products-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

})}
        </div>
        {/* <div className='products-title'>
            <h2>New Arrivals</h2>
            <p>Shop Now</p>
        </div>
        <div className='products-list'>
            <div className='product-item'>
                <img src="" alt="" />
                <p>Product Name</p>
                <p>$99.99</p>
            </div>
            <div className='product-item'>
                <img src="" alt="" />
                <p>Product Name</p>
                <p>$99.99</p>
            </div>
            <div className='product-item'>
                <img src="" alt="" />
                <p>Product Name</p>
                <p>$99.99</p>
            </div>
        </div> */}

    </div>
  )
}
