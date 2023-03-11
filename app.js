//use dotenv middleware to initialize
const connectDB = require("./db/connect");
require("dotenv").config();
console.log("Task Manager App");
const express = require("express");
const app = express();
const Tasks = require("./routes/tasks");
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.json());
app.use(express.static("./public"));
//routes
app.use("/api/v1/tasks", Tasks);
app.use(notFound);
app.use(errorHandlerMiddleware)

// app.listen(5000, () => console.log(`Server is listening on port 5000...`));

// step9 : set a async function to start db and put app.listenn inn try catch block

// const port = 5000;
// const start = async () => {
//   try {
//     await connectDB();
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}...`);
//       console.log("connect to the db....");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// step 10: copy connectionString in .env file to hide connection details and change await value

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
      console.log("Database Connected Successfully......");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
