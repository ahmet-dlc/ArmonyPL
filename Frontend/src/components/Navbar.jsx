import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa"; // Using react-icons
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="YourBrand Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-icons">
        {/* Favorite and Cart links */}
        <Link to="/favorites" className="nav-button"><FaStar /></Link>
        <Link to="/cart" className="nav-button"><FaShoppingCart /></Link>
        
        {/* Sign In button (you can replace this with conditional render based on auth state later) */}
        <Link to="/login"><button className="sign-in-btn">Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
