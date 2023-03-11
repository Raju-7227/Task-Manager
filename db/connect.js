// step7
const mongoose = require("mongoose");
// const connectionString =
//   "mongodb+srv://root1:root1@taskmanager.wsss4k6.mongodb.net/Task_Manager1?retryWrites=true&w=majority";
// step 8 : give password, database name and promise connect function, export it in app.js

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("Connected to DB...."))
//   .catch((err) => console.log(err));

// step 9: make function and return the promise, export the function to app.js

// const connectDB = () => {
//   return mongoose.connect(connectionString, {
//     useNewUrlParser: true, // used to remove deprecated warnings
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
// };
// module.exports = connectDB;

// step 10:
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // used to remove deprecated warnings
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
