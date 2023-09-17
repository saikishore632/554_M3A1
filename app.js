const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
//This is CORS Ref:https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
// 1) MIDDLEWARES Morgan is used for debugging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// 2)MIDDLEWARE json is used for injecting the body attribute in the pipeline
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

// 3) MIDDLE ROUTES loading
const customerRouter = require("./routes/customerRouter");
// const userRouter = require('./routes/userRoutes');
app.use("/api/v1/customer", customerRouter);
// app.use('/api/v1/users', userRouter);
module.exports = app;
const port = process.env.PORT || 3000; // Use the port from environment variables or 3000 as a default

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
