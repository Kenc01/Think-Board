import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "https://keith-think-board.vercel.app",
    ],
  }),
);

//middleware
app.use(express.json()); //this middleware will parse json bodies: req:body
// app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

//4PqonpqyEtAfw0LN
//mongodb+srv://keithbrianlaranjo82_db_user:4PqonpqyEtAfw0LN@cluster0.hhvcvzy.mongodb.net/?appName=Cluster0
