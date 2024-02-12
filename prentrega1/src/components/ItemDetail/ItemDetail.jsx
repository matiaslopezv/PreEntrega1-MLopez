import React from 'react'
import './ItemDetail.css'
const ItemDetail = ({producto}) => {
  return (
    <div className='productoEntero'>
        <h1 >{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h4>{producto.precio}</h4>
            <h4>{producto.stock}</h4>
            <p>{producto.descripcion}</p>
    </div>
  )
}

export default ItemDetail

//RENDERIZAR EL CONTENIDO DEL JSON PARA MOSTRAR EL ARTICULO 
//O PRODUCTO EN SU PROPIA RUTA