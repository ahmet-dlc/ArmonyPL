import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

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
        <Link to="/favorites" className="nav-button"><FaStar size={30} /></Link>
        <Link to="/cart" className="nav-button"><FaShoppingCart size={30} /></Link>
        
        {isLoggedIn ? (
          <Link to="/profile" className="nav-button"><FaUserCircle size={45} /></Link>
        ) : (
          <Link to="/login"><button className="sign-in-btn">Login</button></Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
