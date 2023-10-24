const connection = require("../config/database");
const { getUserData } = require("../services/CRUDServices");

const getHomePage = async (req, res) => {
  let results = await getUserData();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  console.log("req.body: ", req.body);
  let email = req.body.email;
  let myname = req.body.myname;
  let city = req.body.city;

  console.log(">>> email: ", email, "- myname: ", myname, "- city: ", city);

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES (?, ?, ?)`,
    [email, myname, city]
  );

  res.send("Create a new user success!");
  console.log(">>> result: ", results);
};

const getUpdatePage = (req, res) => {
  console.log(">>> check user:", req.params);
  res.render("edit.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
