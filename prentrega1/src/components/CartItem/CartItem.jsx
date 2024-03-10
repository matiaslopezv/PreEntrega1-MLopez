import React from 'react';

const CartItem = ({producto,eliminarDelCarrito}) => {

    return (
        <div className='container'>
            <h2>{producto.producto.nombre}</h2>

            <img className='foto' src={producto.producto.img} alt={producto.producto.nombre}/>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Valor: ${producto.producto.precio*producto.cantidad}</p>
            <button onClick={()=> eliminarDelCarrito(producto.producto.id)}>Eliminar producto</button>
        </div>
    );
};

export default CartItem;