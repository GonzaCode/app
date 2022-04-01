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
         setCarrito(copiaCarrito)
      } else {
         copiaCarrito.push(objAlCarrito)
         setCarrito(copiaCarrito)
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

   function precioTotal() {
      let total = 0
      carrito.forEach((el) => {
         const pre = el.cantidad * el.precio
         total += pre
      })
      return total
   }

   function crearBoleta(e) {
      e.preventDefault()
      const datos = {
         comprador: {
            nombre: document.querySelector("#nombre").value,
            telefono: document.querySelector("#celular").value,
            email: document.querySelector("#email").value
         },
         items: carrito,
         total: precioTotal()
      }
      console.log(datos)
   }

   const valorContexto = {
      addItem,
      totalProd,
      limpiarCarrito,
      borrarProd,
      precioTotal,
      crearBoleta,
      carrito
   }

   return (
      <Provider value={valorContexto}>
         {children}
      </Provider>
   )
}

export default MiProvider