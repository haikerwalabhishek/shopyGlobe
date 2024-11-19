import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header className="navHeader">
      <h3>ShipyGlobe</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  )
}

export default Header