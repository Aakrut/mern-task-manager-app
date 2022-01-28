const express = require("express");
const taskDB = require("./db/taskDB");
require("dotenv").config();
const TaskRoute = require("./routes/taskRoutes");
const cors = require('cors');
const notFound = require("./middleware/notFound");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/tasks", TaskRoute);

app.use(notFound);



const port = process.env.port || 5000;

const start = async () => {
  try {
    await taskDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is Running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
