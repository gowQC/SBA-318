const React = require("react");

class ListView extends React.Component {
  render() {
    const propKey = Object.keys(this.props)[1];
    const myArray = this.props[propKey];
    let displayImg = true;

    return (
      <div>
        <ul>
          {myArray.map((task) => (
            <li key={task.task_number}>
              {task.completed ? (
                <span>{task.description} : True </span>
              ) : (
                <>
                  {(displayImg = false)}
                  <span>{task.description} : False </span>
                </>
              )}
              <br />
            </li>
          ))}
        </ul>
        <a href="http://localhost:3000/modifyList">
          Click here to start modifying data
        </a>
        {displayImg ? (
          <>
            <p>
              Good job! Here's your image of a golden star.
              <br />
              <a href="http://localhost:3000/downloadButton">
                If you want to download this image, click here.
              </a>
            </p>
            <img src="https://i0.wp.com/bookertalk.com/wp-content/uploads/2016/05/gold-star.jpg?ssl=1" />
          </>
        ) : (
          <p>Finish your tasks for an image reward!</p>
        )}
      </div>
    );
  }
}

module.exports = ListView;
