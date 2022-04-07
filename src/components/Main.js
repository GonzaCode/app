import ItemDetailContainer from "./items/ItemDetailContainer.js"
import ItemListContainer from "./items/ItemListContainer.js"
import { Routes, Route } from "react-router-dom"
import Carrito from "./Carrito.js"
import Checkout from "./Checkout.js"
import Seguimiento from "./Seguimiento.js"


const Main = () => {
   return (
      <main>
         <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/seguimiento" element={<Seguimiento/>}/>
         </Routes>
      </main>
   )
}

export default Main 