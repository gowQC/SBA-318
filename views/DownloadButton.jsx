const React = require("react");

class Download extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <p>If you got here by completing the tasks, then great job!</p>
          <p>
            If you got here by searching for this route in your browser's search
            bar: YOU CHEATED!
          </p>
          <form action="/downloadButton/download">
            <button type="submit">Download Image</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Download;
