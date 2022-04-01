import CartWidget from "./CartWidget.js"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <NavLink to="/categoria/Cuerdas">CUERDAS</NavLink>
        <NavLink to="/categoria/Pianos">PIANOS</NavLink>
        <NavLink to="/categoria/Vientos">VIENTOS</NavLink>
        <NavLink to="/carrito"><CartWidget/></NavLink>
    </nav>
  )
}

export default Nav