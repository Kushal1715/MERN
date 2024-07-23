import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="list">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

//diff betn navlink and link
