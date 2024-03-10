import React, {useState,useContext} from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {
  const [cart,setCart] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

    const aumentar = (count) => {

        setCart(true)

        agregarAlCarrito(producto,count)

    }
  
  return (
    <div className='productoEntero'>
            <div className="card">
              <img className='articulo card-img-top' src={producto.img} alt={producto.nombre}/>
              <div className="card-body">
                <h1 >{producto.nombre}</h1>
                <h4 className="card-title">Precio: ${producto.precio}</h4>
                <h4 className="card-text">{producto.stock}</h4>
                <p className="card-text">{producto.descripcion}</p>
              </div>
              {producto.stock == 0 ? <h2>PRODUCTO FUERA DE STOCK</h2> : (
                cart ? <Link to={'/cart'}>Ir a tu carrito</Link> : <Contador inicial={1} stock={producto.stock} aumentar={aumentar}/>
            )}
            </div>
    </div>
  )
}

export default ItemDetail

