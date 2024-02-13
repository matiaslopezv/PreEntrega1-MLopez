import React from 'react'
import './ItemDetail.css'
const ItemDetail = ({producto}) => {
  return (
    <div className='productoEntero'>
            <div className="card">
            <img className='articulo card-img-top' src={producto.img} alt={producto.nombre}/>
            <div class="card-body">
            <h1 >{producto.nombre}</h1>
            <h4 className="card-title">Precio: ${producto.precio}</h4>
            <p className="card-text">{producto.descripcion}</p>
  </div>
</div>

    </div>
  )
}

export default ItemDetail

