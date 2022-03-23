import ItemCount from "./ItemCount"
import { useContext } from "react"
import {contexto} from "../../context/cartContext.js"

const ItemDetail = ({item}) => {

   const {addItem} = useContext(contexto)

   const onAdd = (cantidad) => {
      console.log("Items agregados: ",cantidad)
      addItem(item, cantidad)
   }

   return (
      <article className="main__article_detail">
         <img src={item.image}/>
         <div>
            <h2>{item.title}</h2>
            <p>U$D{item.price}</p>
            <ItemCount initial={1} stock={9} onAdd={onAdd} reduce={false}/>
         </div>
         <p className="grid_a">{item.description}</p>
      </article>
   )
}

export default ItemDetail