import express, { Request, Response } from "express";

// Express is a web application framework for Node.js
// It is used to build web applications and APIs
const app = express();
const port = 5000;

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
const clientRouter = require("Routes/client");
app.use("/api/client", clientRouter);

// Routes for the worker
const workerRouter = require("Routes/worker");
app.use("/api/worker", workerRouter);

// Routes for the admin
const adminRouter = require("Routes/admin");
app.use("/api/admin", adminRouter);

// Routes for the auth
const authRouter = require("Routes/auth");
app.use("/api/auth", authRouter);
