const express = require("express");
const router = express.Router();

// data variables
const todoListData = require("../data/todo-list-array");

// http://localhost:3000/todoList
router
  .route("/")
  .get((req, res) => {
    res.render("ListView", { todoListData });
  })
  .put((req, res) => {
    if (req.body.completed === "on") {
      todoListData[req.body.task_number].completed = true;
    } else {
      todoListData[req.body.task_number].completed = false;
    }
    res.redirect("http://localhost:3000/todoList");
  });

// http://localhost:3000/todoList/:listItem
router.route("/:listItem").get((req, res) => {
  if (!isNaN(Number(req.params.listItem))) {
    const num = Number(req.params.listItem);
    if (Math.floor(num) < todoListData.length && Math.floor(num) >= 0) {
      const value = [todoListData[req.params.listItem]];
      // console.log(value);
      res.render("ListView", { value }); // tried to render, but had issues
      // res.json(todoList[req.params.listItem]);
      // res.send("OK");
    } else {
      res.send("Request parameter is a number, but not a valid index.");
    }
  } else {
    res.send("Request parameter is not a number.");
  }
  // ;
});

module.exports = router;
