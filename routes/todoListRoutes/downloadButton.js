const express = require("express");
const router = express.Router();

// http://localhost:3000/downloadButton
router.route("/").get((req, res) => {
  res.render("todoListViews/DownloadButton");
});

router.route("/download").get((req, res) => {
  res.download("./gold-star.webp");
});

module.exports = router;
