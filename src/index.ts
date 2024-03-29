import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

//middleware
app.use("/user", userRouter);
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
