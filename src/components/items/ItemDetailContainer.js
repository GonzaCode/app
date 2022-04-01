import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { productosCollection } from "../../firebase.js"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

   const [producto, setProducto] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const {idProducto} = useParams()

   useEffect(() => {
      
      const pedido = getDoc(doc(productosCollection,idProducto))
      console.log(pedido)

      pedido
         .then(res => setProducto({ id: res.id, ...res.data() }))
         .catch(err => console.log(err))
         .finally(() => setIsLoaded(true))
   },[])


   return !isLoaded ? <h2>Cargando producto...</h2> : <ItemDetail item={producto}/>
}

export default ItemDetailContainer
