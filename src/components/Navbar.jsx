import "../styles.css";
import { Link } from "react-router-dom";
  import "../styles.css";
  import logo from "../assets/logo.png";
  
  function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Tadow Interior Logo" className="logo-image" />
          &nbsp;&nbsp;&nbsp;
          <h3>Tadow Interior</h3>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }

  
  export default Navbar;
