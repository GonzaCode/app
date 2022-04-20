import { memo } from "react"
import Item from "./Item.js"

const ItemList = ({items}) => {

   return (
      <article className="main__article">
         {items.map((e,i) => <Item key={e.id} item={e}/>)}
      </article>
   )
}

export default memo(ItemList)
