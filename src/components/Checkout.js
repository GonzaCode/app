import { useContext } from "react"
import {contexto} from "../context/cartContext.js"

const Checkout = () => {

   const { crearBoleta, idBoleta } = useContext(contexto)

   return (
      <article className="main__article_checkout">
         <h2>Información de Contacto</h2>
         <form onSubmit={crearBoleta} className="checkout__form">
            <div>
               <label htmlFor="nombre">Nombre:</label>
               <input type="text" id="nombre" required={true} placeholder="Nombre completo"></input>
            </div>
            <div>
               <label htmlFor="celular">Cel./Tel.:</label>
               <input type="text" id="celular" required={true} placeholder="Número de contacto"></input>
            </div>
            <div>
               <label htmlFor="email">E-mail:</label>
               <input type="email" id="email" required={true} placeholder="Dirección de correo electronico"></input>
            </div>
            <button className="btn css-button-sliding-to-left--green">Finalizar Compra</button>
         </form> 
         {idBoleta && <p>ID de su ultima compra: {idBoleta}</p>}
      </article>
   )
}

export default Checkout