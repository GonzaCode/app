import CartWidget from "./CartWidget.js"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <NavLink to="/categoria/Cuerdas" className="header__nav_a">CUERDAS</NavLink>
        <NavLink to="/categoria/Pianos" className="header__nav_a">PIANOS</NavLink>
        <NavLink to="/categoria/Vientos" className="header__nav_a">VIENTOS</NavLink>
        <NavLink to="/carrito" className="header__nav_a"><CartWidget/></NavLink>
    </nav>
  )
}

export default Nav