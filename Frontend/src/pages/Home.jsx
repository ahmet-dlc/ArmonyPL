import React, { useEffect } from "react";
import { FaStar, FaShippingFast, FaPalette } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

// Sample image imports (make sure these paths match your actual files)
import img1 from "../assets/cool.png";
import img2 from "../assets/ex.png";
import img3 from "../assets/palet.png";
import img4 from "../assets/prdct.png";
import img5 from "../assets/shop.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      {/* Brand Overview */}
      <section className="brand-overview">
        <h1 className="brand-title">Welcome to Our Curtain Store</h1>
        <p className="brand-description">
          Discover the perfect curtains to transform your living space with style, elegance, and quality.
        </p>
      </section>

      {/* Promotions Section */}
      <section className="promotions">
        <h2 className="promotion-title">Special Offers</h2>
        <div className="promotion-item">
          <h3>Buy 1 Get 1 30% Off</h3>
          <p>On all curtain sets. Don't miss out on this limited-time offer!</p>
        </div>
        <div className="promotion-item">
          <h3>Free Shipping</h3>
          <p>On all orders over $100. Shop now and save!</p>
        </div>
        <div className="promotion-item">
          <h3>New Year Sale - Up to 50% Off!</h3>
          <p>Celebrate the new year with amazing deals on selected curtains!</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaStar className="feature-icon" />
            <h3>Premium Quality</h3>
            <p>
              Our curtains are crafted with the finest materials to ensure durability and elegance in every home.
            </p>
          </div>
          <div className="feature-card">
            <FaShippingFast className="feature-icon" />
            <h3>Fast Shipping</h3>
            <p>
              Enjoy quick delivery with all orders. We guarantee fast and reliable shipping to your doorstep.
            </p>
          </div>
          <div className="feature-card">
            <FaPalette className="feature-icon" />
            <h3>Variety of Styles</h3>
            <p>
              Choose from a wide selection of styles, colors, and patterns to suit your taste and home decor.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" data-aos="fade-up">
        <h2 className="gallery-title">Our Latest Creations</h2>
        <div className="gallery-grid">
          {[img1, img2, img3, img4, img5].map((src, idx) => (
            <div key={idx} className="gallery-card">
              <img src={src} alt={`Curtain ${idx + 1}`} className="gallery-img" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
