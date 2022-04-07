import { useContext } from "react"
import {contexto} from "../context/cartContext.js"
import Item from "./items/Item.js"

const Seguimiento = () => {

   const {identPedido, pedidoSeguido} = useContext(contexto)

   return (
      <article className="main__article_seguimiento">
         <form className="seguimiento__form">
            <h2>Seguimiento de Pedidos</h2>
            <div>
               <label htmlFor="id">ID:</label>
               <input id="id" type="text" placeholder="Escribe el ID de tu pedido"></input>
            </div>
         </form>
         <button onClick={()=>identPedido(document.getElementById("id").value)}>Obtener pedido</button>
         {pedidoSeguido.comprador ?
            <div>
               <h3>{pedidoSeguido.items.map((el) => <Item item={el} seguimiento={true}/>)}</h3>
            </div>
            :
            <p>Esperando pedido</p>
         }
      </article>
   )
}

export default Seguimiento