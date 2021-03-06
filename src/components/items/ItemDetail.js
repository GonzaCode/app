import ItemCount from "./ItemCount"
import { useContext } from "react"
import {contexto} from "../../context/cartContext.js"

const ItemDetail = ({item}) => {

   const {addItem} = useContext(contexto)

   const onAdd = (cantidad) => {
      addItem(item, cantidad)
   }

   return (
      <article className="main__article_detail">
         <img src={`.${item.imagen}`}/>
         <div>
            <h2>{item.nombre}</h2>
            <p>U$D{item.precio}</p>
            <ItemCount initial={1} stock={9} onAdd={onAdd} reduce={false}/>
         </div>
         <p className="grid_a">{item.nombre}</p>
      </article>
   )
}

export default ItemDetail