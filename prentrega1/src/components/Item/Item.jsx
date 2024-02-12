import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

const Item = ({producto}) => {
  return (
    <Link to={`/detalle/${producto.id}`}>
        <div key={producto.id} className='container'>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} className='foto'/>
        </div> 
     </Link>
  )
}

export default Item