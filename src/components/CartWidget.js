import { useContext } from "react"
import {contexto} from "../context/cartContext.js"

const CartWidget = () => {

    const {totalProd} = useContext(contexto)

    return (
        <>
            <span className="material-icons">shopping_cart</span>
            {totalProd() > 0 && <span>{totalProd()}</span>}
        </>
    )
}

export default CartWidget