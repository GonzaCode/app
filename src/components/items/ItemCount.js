import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const ItemCount = ({stock, initial, onAdd, reduce}) => {

   const [estado, setEstado] = useState(initial)
   const [added, setAdded] = useState(false)

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

   if (!added) {
      return (
         <>
            <br/> <p className="article__detail_cantidad">Cantidad: {estado}</p>
            <button className="article__detail_btn" onClick={handleRestar}>-</button>
            <button className="article__detail_btn" onClick={handleSumar}>+</button>
            <button className="article__detail_btn" onClick={handleAdd}>Agregar</button>
         </>
      )
   } else {
      return (
         <>
            <br/><p>Agregado</p>
            <button className="article__detail_btn" onClick={handleRetry}>Agregar más cantidad</button>
            <Link to="/carrito"><button>Finalizar compra</button></Link>
         </>
      )
   }
}

export default ItemCount