const React = require("react");

class ModifyWorkouts extends React.Component {
  render() {
    const workoutsData = this.props.workoutsData;

    return (
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <ul>
            {workoutsData.map((workout) => (
              <li>
                {workout.completed ? (
                  <span>
                    {workout.workout_name}: Currently completed{" "}
                    {workout.currently_completed} reps : Current Best of{" "}
                    {workout.current_best} reps : Completed{" "}
                  </span>
                ) : (
                  <>
                    <span>
                      {workout.workout_name}: Currently completed{" "}
                      {workout.currently_completed} reps : Current Best of{" "}
                      {workout.current_best} reps : Incomplete{" "}
                    </span>
                  </>
                )}
                <br />
              </li>
            ))}
          </ul>
          <h3>PUT Form - Update existing workout</h3>
          <form action={`/workouts?_method=PUT`} method="POST">
            <label htmlFor="workout_name">Select Current Workout:</label>
            <select type="text" id="workout_name" name="workout_name">
              {workoutsData.map((workout) => (
                <option>{workout.workout_name}</option>
              ))}
            </select>
            <br />
            <label htmlFor="currently_completed">
              Input Current Amount of Reps Completed:
            </label>
            <input
              type="number"
              name="currently_completed"
              id="currently_completed"
              min={0}
              required
            />
            <br />
            <input type="submit" name="" value="Modify Workout" />
          </form>
          <br />
          <h3>POST Form - Add a new workout</h3>
          <form action={`/workouts`} method="POST">
            <label htmlFor="workout_name">Input Workout Name:</label>
            <input type="text" name="workout_name" id="workout_name" required />
            <br />
            <label htmlFor="currently_completed">
              Input Current Amount of Reps Completed:
            </label>
            <input
              type="number"
              name="currently_completed"
              id="currently_completed"
              min={0}
              required
            />
            <br />
            <input type="submit" name="" value="Add Workout" />
          </form>
          <br />
          <h3>DELETE Form - Delete existing workout</h3>
          <form action={`/workouts?_method=DELETE`} method="POST">
            <label htmlFor="workout_name">Select Current Workout:</label>
            <select type="text" id="workout_name" name="workout_name">
              {workoutsData.map((workout) => (
                <option>{workout.workout_name}</option>
              ))}
            </select>
            <br />
            <label htmlFor="confirmedDeletion">
              Are you sure you wish to delete this workout?
            </label>
            <input
              type="checkbox"
              id="confirmedDeletion"
              name="confirmedDeletion"
              required
            />{" "}
            <br />
            <input type="submit" name="" value="Delete Workout" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = ModifyWorkouts;
