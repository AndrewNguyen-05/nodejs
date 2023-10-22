const express = require("express"); //commonjs
require("dotenv").config(); //setting up to use env
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const pool = require("./config/database");

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || "localhost"; //host

//config
configViewEngine(app);

//Khai báo route
app.use("/", webRoutes);

// simple query
pool.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>> results:", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
