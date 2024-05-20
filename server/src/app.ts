import express, { Request, Response } from "express";
import cors from "cors";

// Express is a web application framework for Node.js
// It is used to build web applications and APIs
const app = express();
const port = 5000;

// This allows specific domains to access our API and prevents unwated ones from reaching it
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json()); // Add this line to enable JSON parsing

// this is a test route, you can access it by going to http://localhost:5000/test
app.get("/test", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// this is to start the server and tell it to listen to requests on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Routes for the client
import clientRouter from "./Routes/client";
app.use("/api/client", clientRouter);

// Routes for the worker
import workerRouter from "./Routes/worker";
app.use("/api/worker", workerRouter);

// Routes for the admin
import adminRouter from "./Routes/admin";
app.use("/api/admin", adminRouter);

// Routes for the auth
import authRouter from "./Routes/auth";
app.use("/api/auth", authRouter);
