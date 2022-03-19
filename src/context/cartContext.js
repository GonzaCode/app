import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

   const [carrito, setCarrito] = useState([])

   function addItem(item, cantidad) {
      const copiaCarrito = [...carrito]
      const objAlCarrito = {...item, cantidad}

      if (yaExiste(item.id)) {
         copiaCarrito[copiaCarrito.findIndex((e) => e.id === item.id)].cantidad += cantidad
         
         console.log(carrito)
      } else {
         copiaCarrito.push(objAlCarrito)
         setCarrito(copiaCarrito)
         console.log(carrito)
      }
   }

   function yaExiste(id) {
      return carrito.some((prod) => prod.id === id)
   }

   function totalProd() {
      return carrito.length
   }

   const valorContexto = {
      addItem,
      totalProd,
      carrito
   }

   return (
      <Provider value={valorContexto}>
         {children}
      </Provider>
   )
}

export default MiProvider