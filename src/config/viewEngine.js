const express = require("express"); //commonjs
const path = require("path"); //commonjs

const configViewEngine = (app) => {
  //config template engine
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  //config static file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
