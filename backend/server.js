import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";  // Import auth routes
import cartRoutes from "./routes/cartRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js"; // Import favorite routes


dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);  // Add authentication routes
app.use("/api/cart", cartRoutes);
app.use("/api/favorites", favoriteRoutes); // Add the favorites route


app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
