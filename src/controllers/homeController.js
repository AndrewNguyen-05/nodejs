const connection = require("../config/database");

const getHomePage = (req, res) => {
  let user = [];
  // simple query
  connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log(">>> results:", results); // results contains rows returned by server
    user = results;
    res.send("Hello world with ExpressJS" + JSON.stringify(user));
  });
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIT,
};
