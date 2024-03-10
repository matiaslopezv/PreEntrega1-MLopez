import React, {useState, createContext} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const[cart,setCart] = useState([])
    const[total, setTotal] = useState(0)
        
    const agregarAlCarrito = (producto, cantidad) => {
        const indiceProducto = buscarProductoEnCarrito(producto.id);
        if (indiceProducto === -1) {
          setCart([...cart, { producto, cantidad }]);
        } else {
          const nuevoCarrito = [...cart];
          nuevoCarrito[indiceProducto].cantidad += cantidad;
          setCart(nuevoCarrito);
        }
       
      };
      
      const buscarProductoEnCarrito = (idProducto) => cart.findIndex(producto => producto.producto.id === idProducto);
            
      const eliminarDelCarrito = (productoId) => {
        const nuevoCarrito = cart.filter(item => item.producto.id !== productoId);
        setCart(nuevoCarrito);
      };
      
      const vaciarCarrito = () => setCart([]);
    
      const totalCarrito = () => cart.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
      
      const cantidadCarrito = () => cart.reduce((total, item) => total + item.cantidad, 0);

     return(
         <CartContext.Provider value={{
             cart,
             total,
             agregarAlCarrito,
             eliminarDelCarrito,
             vaciarCarrito,
             cantidadCarrito,
             totalCarrito
         }}>
             {children}
         </CartContext.Provider>
     )
 }


export default CartProvider
