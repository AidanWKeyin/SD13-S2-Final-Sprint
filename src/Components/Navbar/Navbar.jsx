import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'





export const Navbar = () => {

    const [menu,setmenu] = useState("shop");
    const {getTotalItemsInCart} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPOHOLIC</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none' }} to='/mens'>Mens</Link>{menu==="mens"?<h/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<h/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<h/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'> 
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalItemsInCart()}</div>
            

        </div>
    </div>
    )
}

export default Navbar