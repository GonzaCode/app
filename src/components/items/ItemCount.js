import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

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
   }

   const handleDelete = () => {
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
            <button className="article__detail_btn" onClick={handleDelete}>Quitar del Carrito</button>
         </>
      )
   }
}

export default ItemCount