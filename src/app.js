const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

const app = express();

// IMPORTING ROUTES
const customerRoutes = require("./routes/customer");
const { urlencoded } = require("express");

// SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
// using morgan to receive request info
app.use(morgan("dev"));
// using express-myconnection to connect to mysql database
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "123456",
      port: "3306",
      database: "nodejs",
    },
    "single"
  )
);
// using urlencoded to be able to read and manipulate object responses
app.use(urlencoded({ extended: false }));

// ROUTES
// tells the server which route should use
app.use("/", customerRoutes);

// STATIC FILES
// not actually using this
app.use(express.static(path.join(__dirname, "public")));

// STARTING SERVER
app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});
