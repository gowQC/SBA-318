const express = require("express");
const router = express.Router();

// data variables
const workoutsData = require("../../data/workouts-array");

// http://localhost:3000/workouts
router
  .route("/")
  .get((req, res) => {
    res.render("workoutsViews/WorkoutsView", { workoutsData });
  })
  .post((req, res) => {
    // check if course_name already exists in array - if it doesn't, do this
    if (
      workoutsData.every(
        (obj) =>
          obj.workout_name.toLowerCase() !== req.body.workout_name.toLowerCase()
      )
    ) {
      const newWorkoutName =
        req.body.workout_name.charAt(0).toUpperCase() +
        req.body.workout_name.slice(1).toLowerCase();
      const newWorkout = {
        workout_name: newWorkoutName,
        currently_completed: `${req.body.currently_completed}`,
        current_best: `${req.body.currently_completed}`,
        completed: false,
      };
      if (req.body.currently_completed > 0) {
        newWorkout.completed = true;
      }
      workoutsData.push(newWorkout);
      res.redirect("http://localhost:3000/workouts");
    }
    // if it does exist already - console log issue then redirect
    else {
      console.log(
        `Unable to add value - ${req.body.workout_name} already exists. Use PUT method!`
      );
      res.redirect("http://localhost:3000/workouts");
    }
  })
  .put((req, res) => {
    for (let i = 0; i < workoutsData.length; i++) {
      if (req.body.workout_name === workoutsData[i].workout_name) {
        workoutsData[i].currently_completed = req.body.currently_completed;
        if (
          workoutsData[i].currently_completed > workoutsData[i].current_best
        ) {
          workoutsData[i].current_best = workoutsData[i].currently_completed;
        }
        if (workoutsData[i].currently_completed > 0) {
          workoutsData[i].completed = true;
        }
      }
    }
    res.redirect("http://localhost:3000/workouts");
  })
  .delete((req, res) => {
    const index = workoutsData.findIndex(
      (obj) => obj.workout_name === req.body.workout_name
    );
    workoutsData.splice(index, 1);
    res.redirect("http://localhost:3000/workouts");
  });

// http://localhost:3000/workouts/modifyWorkouts
router.route("/modifyWorkouts").get((req, res) => {
  res.render("workoutsViews/ModifyWorkouts", { workoutsData });
});

module.exports = router;
