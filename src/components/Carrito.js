import { useContext } from "react"
import { Link } from "react-router-dom"
import {contexto} from "../context/cartContext.js"

const Carrito = () => {
  
   const {carrito,borrarProd,limpiarCarrito} = useContext(contexto)

   function precioTotal() {
      let total = 0
      carrito.forEach((el) => {
         const pre = el.cantidad * el.price
         total += pre
      })
      return total
   }

   return (
      <article className="article_carrito">
         {carrito.map((el) => 
            <div key={el.id} className="carrito__card">
               <img className="carrito__card_image" src={el.image}/>
               <h2 className="carrito__card_title">{el.title}</h2>
               <p className="carrito__card_quantity">{el.cantidad} <span className="carrito__card_price">U$D{el.price}</span></p>
               <button className="carrito_card_button" onClick={()=>borrarProd(el.id)}>Quitar</button>
            </div>
         )}
         {carrito.length != 0 
            ?
               <>
                  <button className="carrito__emp_button" onClick={limpiarCarrito}>Vaciar Carrito</button> 
                  <p className="carrito__price">Precio total: {precioTotal()}</p>
                  <button className="carrito__buy_button"></button>
               </>
            : 
               <p>El carrito se encuentra vacío. <Link to="/" className="carrito__link">Ve a comprar algo.</Link></p>}
      </article>
   )
}

export default Carrito