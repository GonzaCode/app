import Item from "./Item.js"
import { useState, useEffect } from "react"

const arrProd = ["perro","gato","liebre"]

const ItemList = () => {
  
   const [productos, setProductos] = useState(["Cargando productos, por favor espere"])
   useEffect(() => {
      console.log("Ejecutando useEffect")
      const pedido = new Promise((res, rej) => {
         setTimeout(() => {
            res(arrProd)
         },3000)
      })
      pedido
      .then((resultado) => {
         console.log("Bien")
         setProductos(resultado)
      })
      .catch((reject) => {
         console.log("Error:",reject)
      })
   },[])

   return (
      <ul>
         <Item items={productos}/>
      </ul>
   )
}

export default ItemList