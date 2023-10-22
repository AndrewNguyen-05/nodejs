const getHomePage = (req, res) => {
  res.send("Hello world with ExpressJS");
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
