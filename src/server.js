const express = require("express"); //commonjs
const path = require("path"); //commonjs
const app = express(); //app express
const port = 8080;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! with Andrew Nguyen");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
