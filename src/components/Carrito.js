import { useContext } from "react"
import { Link } from "react-router-dom"
import {contexto} from "../context/cartContext.js"

const Carrito = () => {
  
   const {carrito,borrarProd,limpiarCarrito,precioTotal} = useContext(contexto)

   return (
      <article className="article_carrito">
         {carrito.map((el) => 
            <div key={el.id} className="carrito__card">
               <img className="carrito__card_image" src={el.imagen}/>
               <h2 className="carrito__card_title">{el.nombre}</h2>
               <p className="carrito__card_quantity">{el.cantidad} <span className="carrito__card_price">U$D{el.precio}</span></p>
               <button className="carrito_card_button" onClick={()=>borrarProd(el.id)}>Quitar</button>
            </div>
         )}
         {carrito.length != 0 
            ?
               <>
                  <button className="carrito__emp_button" onClick={limpiarCarrito}>Vaciar Carrito</button> 
                  <p className="carrito__price">Precio total: U$D{precioTotal()}</p>
                  <Link to="/checkout"><button className="carrito__buy_button">COMPRAR</button></Link>
               </>
            : 
               <p>El carrito se encuentra vacío. <Link to="/" className="carrito__link">Ve a comprar algo.</Link></p>}
      </article>
   )
}

export default Carrito