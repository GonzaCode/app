import { useContext } from "react"
import {contexto} from "../context/cartContext.js"

const Carrito = () => {
  
   const {carrito,borrarProd,limpiarCarrito} = useContext(contexto)

   return (
      <>
         {carrito.map((el) => 
            <div>
               <img src={el.image}/>
               <h2>{el.title}</h2>
               <p>{el.cantidad}</p>
               <button onClick={borrarProd} data={el.id}>Quitar</button>
            </div>
         )}
         <button onClick={limpiarCarrito}>Vaciar Carrito</button>
      </>
   )
}

export default Carrito