import CartWidget from "./CartWidget.js"

function Nav() {
  return (
    <nav>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT</a>
        <CartWidget/>
    </nav>
  )
}

export default Nav