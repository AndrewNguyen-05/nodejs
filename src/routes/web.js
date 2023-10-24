const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

//Router.METHOD("/path", handler)
router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);

router.post("/create-user", postCreateUser);

router.get("/create", getCreatePage);

module.exports = router;
