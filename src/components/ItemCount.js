import { useState } from "react"

const ItemCount = ({stock, initial}) => {
   let [estado, setEstado] = useState(initial)
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
   const onAdd = () => {
      console.log("Items agregados: ",estado)
   }
   return (
      <>
         <p className="main__contador">Contador: {estado}</p>
         <button onClick={handleRestar}>-</button>
         <button onClick={handleSumar}>+</button>
         <button onClick={onAdd}>Agregar</button>
      </>
   )
}

export default ItemCount