import React, {useState,createContext} from 'react'

const Contador = ({inicial,stock,aumentar}) => {
    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        aumentar(contador)
    }

  return (
    <div className='d-flex justify-content mx-auto'>
       <button type="button" className="btn btn-info" onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button  type="button" className="btn btn-info" onClick={incrementar}>+</button>
        <button type="button" className="btn btn-info mx-auto" onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default Contador

