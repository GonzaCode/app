import { useContext } from "react"
import {contexto} from "../context/cartContext.js"

const CartWidget = () => {

    const {totalProd} = useContext(contexto)

    return (
        <>
            <span className="material-icons">shopping_cart</span>
            <span>{totalProd()}</span>
        </>
    )
}

export default CartWidget