import { useContext } from "react"
import { Link } from "react-router-dom"
import {contexto} from "../context/cartContext.js"

const Carrito = () => {
  
   const {carrito,borrarProd,limpiarCarrito,precioTotal} = useContext(contexto)

   return (
      <article className="main__article_carrito">
         {carrito.map((el) => 
            <div key={el.id} className="carrito__card">
               <Link to={`/producto/${el.id}`}>
                  <img className="carrito__card_image" src={el.imagen}/>
               </Link>
               <div>
                  <Link to={`/producto/${el.id}`}>
                     <h3 className="carrito__card_title">{el.nombre}</h3>
                     <p className="carrito__card_quantity">Cantidad: {el.cantidad}</p>
                  </Link>
                  <p className="carrito__card_price">U$D{el.precio}</p>
                  <button className="carrito_card_button btn" onClick={()=>borrarProd(el.id)}>Quitar</button>
               </div>
            </div>
         
         )}
         {carrito.length != 0 
            ?
               <>
                  <button className="carrito__emp_button btn" onClick={limpiarCarrito}>Vaciar Carrito</button> 
                  <div className="carrito__end">
                     <p className="carrito__price"><b>Precio total: U$D{precioTotal()}</b></p>
                     <Link to="/checkout"><button className="carrito__buy_button css-button-sliding-to-left--green">COMPRAR</button></Link>
                  </div>
               </>
            : 
               <p>El carrito se encuentra vacío. <Link to="/" className="link">Ve a comprar algo.</Link></p>}
      </article>
   )
}

export default Carrito