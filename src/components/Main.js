import ItemCount from "./ItemCount.js"
import ItemListContainer from "./ItemListContainer.js"

const Main = () => {
   return (
      <main>
         <ItemListContainer nombre="Jose"/>
         <p>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Amet explicabo corrupti 
            id exercitationem dolorem. Optio, beatae 
            delectus mollitia accusantium illo dolore 
            nostrum aliquid. Magnam deleniti sunt ea 
            vel nulla odit!
         </p>
         <ItemCount stock={7} initial={1}/>
      </main>
   )
}

export default Main 