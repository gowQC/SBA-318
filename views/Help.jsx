const React = require("react");

class Help extends React.Component {
  render() {
    return (
      <>
        <h1>Try replacing 'help' with these:</h1>
        <ul>
          <li>'todolist'</li>
          <li>'modifyList'</li>
          <li>'downloadButton'</li>
        </ul>
        <p>Finishing the whole list will earn you a surprise!</p>
      </>
    );
  }
}

module.exports = Help;
