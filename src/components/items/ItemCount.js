import { useState, useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import {contexto} from "../../context/cartContext.js"

const ItemCount = ({stock, initial, onAdd}) => {

   const [estado, setEstado] = useState(initial)
   const [added, setAdded] = useState(false)
   
   const {yaExiste} = useContext(contexto)
   const {idProducto} = useParams()

   
   const handleSumar = () => {
      if (estado < stock) {
         setEstado(estado + 1)
      }
   }
   const handleRestar = () => {
      if (estado > 1) {
         setEstado(estado - 1)
      }
   }
   const handleAdd = () => {
      onAdd(estado)
      setAdded(true)
      toast.success(`Has agregado ${estado} cantidades de el producto en pantalla al carrito`)
   }
   const handleRetry = () => {
      setAdded(false)
   }

   useEffect(() => {

      if (yaExiste(idProducto)) {
         setAdded(true)
      }

   },[])


   if (!added) {
      return (
         <>
            <br/> <p className="article__detail_cantidad">Cantidad: {estado}</p>
            <button className="article__detail_btn" onClick={handleRestar}>-</button>
            <button className="article__detail_btn" onClick={handleSumar}>+</button>
            <button className="article__detail_btn css-button-sliding-to-left--green" onClick={handleAdd}>Agregar</button>
         </>
      )
   } else {
      return (
         <>
            <br/><p>Agregado</p>
            <button className="article__detail_btn" onClick={handleRetry}>Agregar más cantidad</button><br/>
            <Link to="/carrito"><button onClick={()=>toast.dismiss()} className="article__detail_btn css-button-sliding-to-left--green">Finalizar compra</button></Link>
         </>
      )
   }
}

export default ItemCount