import { useState } from "react"
import ItemCount from "./ItemCount.js"
import ItemListContainer from "./ItemListContainer.js"


const Main = () => {
   const [loading, setLoading] = useState(true)
   console.log(loading)
   return (
      <main>
         <ItemListContainer/>
         <p>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Amet explicabo corrupti 
            id exercitationem dolorem. Optio, beatae 
            delectus mollitia accusantium illo dolore 
            nostrum aliquid. Magnam deleniti sunt ea 
            vel nulla odit!
         </p>
         <button onClick={() => setLoading(!loading)}>toggle</button>
         <ItemCount stock={7} initial={1}/>
      </main>
   )
}

export default Main 