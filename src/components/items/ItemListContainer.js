import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { productosCollection } from "../../firebase.js"
import { getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
   
   const [productos, setProductos] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const {idCategoria} = useParams()

   useEffect(() => {
      
      toast.info("Trayendo productos")
      const pedido = getDocs(!idCategoria ? productosCollection : query(productosCollection,where("categoria","==",idCategoria)))

         pedido
            .then(res => {
               return setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoaded(true))
   },[idCategoria])

   if (!isLoaded) {
      return <h2>Cargando...</h2>
   } else {
      return <ItemList items={productos}/>
   }
}

export default ItemListContainer