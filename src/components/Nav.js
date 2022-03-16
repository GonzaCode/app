import CartWidget from "./CartWidget.js"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <NavLink to="/categoria/hombres">HOMBRE</NavLink>
        <NavLink to="/categoria/mujeres">MUJER</NavLink>
        <NavLink to="/categoria/joyas">JOYAS</NavLink>
        <NavLink to="/categoria/electronicos">ELECTRONICOS</NavLink>
        <NavLink to="/carrito"><CartWidget/></NavLink>
    </nav>
  )
}

export default Nav