import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const {cart, vaciarCarrito, eliminarDelCarrito,totalCarrito} = useContext(CartContext)

  return (
    <div>
      <div>

{cart.length == 0 
? 
<>
<h1>CARRITO VACIO</h1>
<Link to={"/"}>HOME</Link>
</>
    :
    <>
    <h1>Tú carrito</h1>

    {cart.map((p)=>(
        <CartItem key={p.producto.id} producto={p} eliminarDelCarrito={eliminarDelCarrito}/>
    ))}
    

    <div className='container'>
        <p>Total: ${totalCarrito()}</p>

        <button  type="button" className="btn btn-danger mb-3" onClick={vaciarCarrito}>Vaciar carrito</button>

        <Link to={"/checkout"}>
            <button type="button" className="btn btn-success">Completar compra</button>
        </Link>
    </div>


    </>

    

} 
</div>

    </div>
  )
}

export default Cart