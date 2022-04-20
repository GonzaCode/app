import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { productosCollection } from "../../firebase.js"
import { getDoc, doc } from "firebase/firestore"
import Lottie from "lottie-react"
import lottie from "../../lottie.json";

const ItemDetailContainer = () => {

   const [producto, setProducto] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const {idProducto} = useParams()

   const options = {
      animationData: lottie,
      autoplay: true,
      loop: false,
      style: {
         width: "25%",
         margin: "auto"
      }
   }

   useEffect(() => {
      
      const pedido = getDoc(doc(productosCollection,idProducto))

      pedido
         .then(res => setProducto({ id: res.id, ...res.data() }))
         .catch(err => console.log(err))
         .finally(() => setIsLoaded(true))
   },[])


   return !isLoaded ? <Lottie {...options}/> : <ItemDetail item={producto}/>
}

export default ItemDetailContainer
