import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import quotes from "./config/quotes.js";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});


app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/quote", (req: Request, res: Response) => {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return res.json({ quote: quotes[randomIndex] });
});


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
