import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer_layout">
        <Link to="/seguimiento"><p className="footer_seguimiento">Seguir mi pedido.</p></Link>
        <p>Copyright 2022 - Gonzalo M.</p>
        <p>Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer