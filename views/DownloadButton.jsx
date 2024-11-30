const React = require("react");

class Download extends React.Component {
  render() {
    return (
      <>
        <p>If you got here by completing the tasks, then great job!</p>
        <p>
          If you got here by searching for this route in your browser's search
          bar: YOU CHEATED!
        </p>
        <form action="/downloadButton/download">
          <button type="submit">Download Image</button>
        </form>
      </>
    );
  }
}

module.exports = Download;
