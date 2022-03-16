import Nav from "./Nav.js"
import { Link } from "react-router-dom"

const Header = () => {
   return (
      <header className="header_layout">
         <Link to="/">
            <h1>E-COMMERCE</h1>
         </Link>
         <Nav/>
      </header>
   )
}

export default Header