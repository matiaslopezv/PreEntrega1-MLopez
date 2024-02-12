import React from 'react'
const ItemDetail = ({producto}) => {
  return (
    <div>
        <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.description}</p>
    </div>
  )
}

export default ItemDetail

//RENDERIZAR EL CONTENIDO DEL JSON PARA MOSTRAR EL ARTICULO 
//O PRODUCTO EN SU PROPIA RUTA