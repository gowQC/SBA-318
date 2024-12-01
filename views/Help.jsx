const React = require("react");

class Help extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <h1>
            Alright, time to finish your to-do list, improve your grades, and
            keep up with your workouts! With this tool, you can log your
            progress. Try replacing 'help' with these:
          </h1>
          <ul>
            <h2>To-do List Routes:</h2>
            <li>'todolist'</li>
            <li>'modifyList'</li>
            <li>'downloadButton'</li>
            <br />
            <h2>Grades Routes:</h2>
            <li>'grades'</li>
            <li>'addGrades'</li>
            <li>'changeGrades'</li>
            <br />
            <h2>Workouts Routes:</h2>
            <li>'workouts'</li>
            <li>'addWorkouts'</li>
            <li>'changeWorkouts'</li>
          </ul>
          <p>Finishing the whole list will earn you a surprise!</p>
        </body>
      </html>
    );
  }
}

module.exports = Help;
