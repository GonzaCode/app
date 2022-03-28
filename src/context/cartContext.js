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
         setCarrito(copiaCarrito)
      } else {
         copiaCarrito.push(objAlCarrito)
         setCarrito(copiaCarrito)
         console.log(carrito)
      }
   }

   function yaExiste(id) {
      return carrito.some((prod) => prod.id === id)
   }

   function borrarProd(id) {
      const filtro = carrito.filter((el) => {
         return el.id != id
      })
      setCarrito(filtro)
   }

   function limpiarCarrito() {
      setCarrito([])
   }

   function totalProd() {
      let cant = 0
      carrito.forEach((el) => {
         cant += el.cantidad
      })
      return cant
   }

   const valorContexto = {
      addItem,
      totalProd,
      limpiarCarrito,
      borrarProd,
      carrito
   }

   return (
      <Provider value={valorContexto}>
         {children}
      </Provider>
   )
}

export default MiProvider