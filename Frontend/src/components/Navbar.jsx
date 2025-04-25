import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      setUserInfo(null);
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsLoggedIn(true);
      setUserInfo(res.data);
    } catch (err) {
      console.error("Error fetching user info:", err);
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  };

  useEffect(() => {
    fetchUser();

    // Listen for login/logout events
    const handleStorageChange = () => {
      fetchUser();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserInfo(null);
    setIsDropdownOpen(false);
    window.dispatchEvent(new Event("storage")); // notify logout
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
          <div className="profile-dropdown">
            <FaUserCircle size={45} onClick={toggleDropdown} style={{ cursor: "pointer" }} />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <p>{userInfo?.name || userInfo?.email}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login"><button className="sign-in-btn">Login</button></Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
