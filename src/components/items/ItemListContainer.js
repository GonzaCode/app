import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { productosCollection } from "../../firebase.js"
import { getDocs, query, where } from "firebase/firestore"
import Lottie from "lottie-react"
import lottie from "../../lottie.json";

const ItemListContainer = () => {
   
   const [productos, setProductos] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const {idCategoria} = useParams()

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
      
      toast.info("Trayendo productos")
      const pedido = getDocs(!idCategoria ? productosCollection : query(productosCollection,where("categoria","==",idCategoria)))

         pedido
            .then(res => {
               return setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((err) => console.log(err))
            .finally(() => {
               setIsLoaded(true)
               setTimeout(()=> {
                  toast.dismiss()
               },1000)
            })
   },[idCategoria])

   if (!isLoaded) {
      return <Lottie {...options}/>
   } else {
      return <ItemList items={productos}/>
   }
}

export default ItemListContainer