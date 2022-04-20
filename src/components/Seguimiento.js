import { useContext } from "react"
import {contexto} from "../context/cartContext.js"
import Item from "./items/Item.js"

const Seguimiento = () => {

   const { identPedido, pedidoSeguido } = useContext(contexto)

   return (
      <article>
         <div className="main__article_seguimiento">
            <form className="seguimiento__form">
               <h2>Seguimiento de Pedidos</h2>
               <div>
                  <label htmlFor="id">ID:</label>
                  <input id="id" type="text" placeholder="Escribe el ID de tu pedido"></input>
               </div>
            </form>
            <button onClick={()=>identPedido(document.getElementById("id").value)} className="btn">Obtener pedido</button>
         </div>
            {pedidoSeguido.comprador &&
               <div className="main__article_seguimiento">
                  <h2>Datos del cliente:</h2>
                  <h3>{pedidoSeguido.comprador.nombre}</h3>
                  <h3>{pedidoSeguido.comprador.email}</h3>
                  <h3>{pedidoSeguido.comprador.telefono}</h3> <br/>
                  <h2>Compra:</h2>
                  {pedidoSeguido.items.map((el) => <Item item={el} seguimiento={true}/>)} <br/>
                  <h2>Total: U$D{pedidoSeguido.total}</h2>
               </div>
            }
      </article>
   )
}

export default Seguimiento