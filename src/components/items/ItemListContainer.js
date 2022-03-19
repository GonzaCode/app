import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

const arrProd = [ //No lo borro, quiza pueda usarlo al momento de cambiar la API por el uso de Firebase
   {
      id: 1,
      nombre: "Teclado CTK-4400",
      marca: "Casio",
      categoria: "Pianos",
      precio: 200
   },
   {
      id: 2,
      nombre: "Guitarra Electroacustica",
      marca: "Memphis",
      categoria: "Cuerdas",
      precio: 169
   },
   {
      id: 3,
      nombre: "Saxofon Alto",
      marca: "Yamaha",
      categoria: "Vientos",
      precio: 800
   },
   {
      id: 4,
      nombre: "Trompeta",
      marca: "Memphis",
      categoria: "Vientos",
      precio: 400
   }
]

const ItemListContainer = () => {
   
   const [productos, setProductos] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const {idCategoria} = useParams()
   
   function filtrar(cat) {
      setTimeout(() => {
         fetch("https://fakestoreapi.com/products")
            .then((response) => {
               return response.json()
            })
            .then((respuesta) => {
               if (cat === "hombres") {
                  const arrFilter = respuesta.filter((e) => e.category === "men's clothing")
                  setProductos(arrFilter)
               }
               else if (cat === "mujeres") {
                  const arrFilter = respuesta.filter((e) => e.category === "women's clothing")
                  setProductos(arrFilter)
               }
               else if (cat === "joyas") {
                  const arrFilter = respuesta.filter((e) => e.category === "jewelery")
                  setProductos(arrFilter)
               }
               else if (cat === "electronicos") {
                  const arrFilter = respuesta.filter((e) => e.category === "electronics")
                  setProductos(arrFilter)
               }
               else /*if (cat === undefined)*/ {
                  setProductos(respuesta)
               }
            })
            .catch((err) => {
               console.log(err)
            })
            .finally(() => {
               setIsLoaded(true)
               toast.dismiss()
            })
      },1000)
   }

   useEffect(() => {
      toast.info("Trayendo productos")
      setIsLoaded(false)
      filtrar(idCategoria)
   },[idCategoria])

   if (!isLoaded) {
      return <h2>Cargando...</h2>
   } else {
      return <ItemList items={productos}/>
   }
}

export default ItemListContainer