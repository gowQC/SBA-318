const React = require("react");

class GradesView extends React.Component {
  render() {
    const propKey = Object.keys(this.props)[1];
    const myArray = this.props[propKey];
    let passingAll = true;

    return (
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <ul>
            {myArray.map((grade) => (
              <li>
                {grade.passing ? (
                  <span>
                    {grade.course_name}: Grade of {grade.grade} : Passing{" "}
                  </span>
                ) : (
                  <>
                    {(passingAll = false)}
                    <span>
                      {grade.course_name}: Grade of {grade.grade} : Failing{" "}
                    </span>
                  </>
                )}
                <br />
              </li>
            ))}
          </ul>
          <br />
          {myArray.length == 1 ? (
            <>
              <a href="http://localhost:3000/grades">
                Click here to view all grades.
              </a>
            </>
          ) : myArray.length <= 0 ? (
            <>
              <div>No courses/grades match this query.</div>
              <a href="http://localhost:3000/grades">
                Click here to view all grades.
              </a>
            </>
          ) : (
            <>
              {passingAll ? (
                <h3>Congrats on passing all of your classes!</h3>
              ) : (
                <h4>Work on passing all of your classes. You can do it!</h4>
              )}
              <a href="http://localhost:3000/grades/modifyGrades">
                Click here to start modifying data
              </a>
            </>
          )}
        </body>
      </html>
    );
  }
}

module.exports = GradesView;
