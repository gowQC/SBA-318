const express = require("express");
const router = express.Router();

// data variables
const gradesData = require("../../data/grades-array");

// http://localhost:3000/grades
router
  .route("/")
  .get((req, res) => {
    // allows for search through request query
    const courseName = req.query.courseName;
    console.log(courseName);
    if (courseName) {
      res.redirect(`http://localhost:3000/grades/${courseName}`);
    } else {
      res.render("gradesViews/GradesView", { gradesData });
    }
  })
  .post((req, res) => {
    // check if course_name already exists in array - if it doesn't, do this
    if (
      gradesData.every(
        (obj) =>
          obj.course_name.toLowerCase() !== req.body.course_name.toLowerCase()
      )
    ) {
      const newCourseName =
        req.body.course_name.charAt(0).toUpperCase() +
        req.body.course_name.slice(1).toLowerCase();
      const newGrade = {
        course_name: newCourseName,
        grade: `${req.body.grade}`,
        passing: false,
      };
      if (req.body.grade >= 65) {
        newGrade.passing = true;
      }
      gradesData.push(newGrade);
      res.redirect("http://localhost:3000/grades");
    }
    // if it does exist already - console log issue then redirect
    else {
      console.log(
        `Unable to add value - ${req.body.course_name} already exists. Use PUT method!`
      );
      res.redirect("http://localhost:3000/grades");
    }
  })
  .put((req, res) => {
    for (let i = 0; i < gradesData.length; i++) {
      if (req.body.course_name === gradesData[i].course_name) {
        gradesData[i].grade = req.body.grade;
        if (gradesData[i].grade >= 65) {
          gradesData[i].passing = true;
        } else {
          gradesData[i].passing = false;
        }
      }
    }
    res.redirect("http://localhost:3000/grades");
  });

// http://localhost:3000/grades/modifyGrades
router.route("/modifyGrades").get((req, res) => {
  res.render("gradesViews/ModifyGrades", { gradesData });
});

// http://localhost:3000/grades/:courseName
router.route("/:courseName").get((req, res) => {
  const value = [];
  for (let i = 0; i < gradesData.length; i++) {
    if (
      req.params.courseName.toLowerCase() ===
      gradesData[i].course_name.toLowerCase()
    ) {
      value.push(gradesData[i]);
    }
  }
  res.render("gradesViews/GradesView", { value });
});

module.exports = router;
