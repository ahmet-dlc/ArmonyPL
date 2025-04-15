import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate sending
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We'd love to hear from you!</p>

      <div className="contact-content">
        <div className="info-box">
          <h3>📍 Address</h3>
          <p>Aleja Krakowska 173</p>
          <p>05-552 Łazy, Poland</p>

          <h3>📞 Phone</h3>
          <p>+(48) 577 017 704</p>

          <h3>📌 Find us on the map</h3>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.387654146958!2d20.929084815800253!3d52.028430779731225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471930d80f37dff1%3A0x1b23e75e012d9e3d!2sAleja%20Krakowska%20173%2C%2005-552%20%C5%81azy%2C%20Poland!5e0!3m2!1sen!2spl!4v1713181600285!5m2!1sen!2spl"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>📬 Send us a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
