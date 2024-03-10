import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './carrito.css'

const CartWidget = () => {
const {cantidadCarrito} = useContext(CartContext)

  return (
    <>
    <div className='cartWidget'>
          <p className='cantidad'>{cantidadCarrito == 0 ? null : cantidadCarrito()}</p> 
          <Link to={'/cart'}>
            <img className='carrito' src="../../../public/img/cart4.svg" alt="cart" />
          </Link>
         
          
    </div>
    </>
  );
};

export default CartWidget;

