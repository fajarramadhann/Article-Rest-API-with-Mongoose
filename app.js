import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import PostRouter from "./routes/PostRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Route
app.use('/api/', PostRouter);

// Connect DB
ConnectDB();

// Port
const port = process.env.PORT;

// Server
app.listen(port, () => {
  console.log(`Server Berjalan pada : http://localhost:${port}`)
})