import { collection, serverTimestamp, addDoc, getDoc, doc } from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

   const [carrito, setCarrito] = useState([])
   const [idBoleta, setIdBoleta] = useState("")
   const [pedidoSeguido, setPedidoSeguido] = useState({})

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
      if (carrito.length < 1) {
         e.preventDefault()
         toast.dismiss()
         toast.error("No tienes productos en el Carrito")
      } else {
         e.preventDefault()
         const orden = {
            comprador: {
               nombre: document.querySelector("#nombre").value,
               telefono: document.querySelector("#celular").value,
               email: document.querySelector("#email").value
            },
            items: carrito,
            total: precioTotal(),
            fecha: serverTimestamp()
         }
         const coleccion = collection(db, "ordenes")
         const pedido = addDoc(coleccion, orden)
         pedido
            .then(res => {
               toast.success("¡Compra finalizada con exito! Id de seguimiento: " + res.id)
               setIdBoleta(res.id)
               setCarrito([])
            })
            .catch(err => {toast.error("Error al realizar la compra: " + err)})
      }
   }

   function identPedido(id) {

      const coleccion = collection(db, "ordenes")
      const pedido = getDoc(doc(coleccion, id))

      pedido
         .then((res) => {
            setPedidoSeguido(res.data())
         })
         .catch(() => {
            toast.error("Error al obtener pedido")
         })
   }

   const valorContexto = {
      addItem,
      totalProd,
      limpiarCarrito,
      borrarProd,
      precioTotal,
      crearBoleta,
      idBoleta,
      identPedido,
      pedidoSeguido,
      yaExiste,
      carrito
   }

   return (
      <Provider value={valorContexto}>
         {children}
      </Provider>
   )
}

export default MiProvider