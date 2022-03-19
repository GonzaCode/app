import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

   const [producto, setProducto] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const {idProducto} = useParams()

   function getItem(id) { 
      setTimeout(() => {
         fetch(`https://fakestoreapi.com/products/${id}`)
         .then((res) => {
            return res.json()
         })
         .then((res) => {
            setProducto(res)
         })
         .catch((err) => {
            console.log(err)
         })
         .finally(() => {
            setIsLoaded(true)
         })
      },500)
   }

   useEffect(() => {
      getItem(idProducto)
   },[])


   return !isLoaded ? <h2>Cargando producto...</h2> : <ItemDetail item={producto}/>
}

export default ItemDetailContainer
