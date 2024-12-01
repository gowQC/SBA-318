/**
 * INSTALLATIONS:
 * npm install express
 * npm install nodemon
 * npm install jsx-view-engine
 * npm install method-override
 * npm install body-parser
 */

/**
 * NEED:
 *  two more data categories
 *  routes for all data that should be exposed to the client (get routes to access all data)
 *  allow for at least ONE POST to one data file
 *  allow for at least ONE DELETE to one data file
 *  at least one data file should support searching through req.params
 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine"); // using jsx view engine for views, terminal installation command: npm i jsx-view-engine

// views
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// routes variables
const todoList = require("./routes/todoListRoutes/todoList");
const modifyList = require("./routes/todoListRoutes/modifyList");
const downloadButton = require("./routes/todoListRoutes/downloadButton");

// third party middleware variables
const methodOverride = require("method-override"); // npm install method-override
const bodyParser = require("body-parser"); // npm install body-parser

// setting time variable as let because it will eventually be reset when the ten minutes pass
let dueTime = new Date();
dueTime.setMinutes(dueTime.getMinutes() + 1); // based off curent time, sets due time (10 minutes ahead)

// data variables - referenced here for when they need to be reset
const todoListData = require("./data/todo-list-array");

// my custom middleware
app.use((req, res, next) => {
  const currentTime = new Date(); // grabs date at time of calling middleware
  const timeDiff = dueTime.getTime() - currentTime.getTime(); // difference in time
  if (timeDiff <= 0) {
    // hits due time or past due time - reset values and set another 10 minutes
    console.log(`Past due! Resetting values of all activities.`);

    // reset todoListData
    for (let i = 0; i < todoListData.length; i++) {
      todoListData[i].completed = false;
    }

    dueTime = new Date();
    dueTime.setMinutes(dueTime.getMinutes() + 1);
  } else {
    const totalSeconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    console.log(
      `${
        minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""} and ` : ""
      }${seconds} second${
        seconds !== 1 ? "s" : ""
      } remaining to complete all activities.`
    );
  }
  next();
});

// bodyParser middleware located here so that we can see req.body in upcoming custom middleware
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions
app.use(bodyParser.json({ extended: true }));

app.use((req, res, next) => {
  const currentDate = new Date();
  console.log(
    `-----
        ${currentDate.toLocaleDateString()}: Received a ${
      req.method
    } request to ${req.url}.`
  );
  console.log(req.body);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Containing the data:`);
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// import routes and other middleware variables we just created
app.use(methodOverride("_method"));
app.use(express.static("public")); // used for CSS file
app.use("/todoList", todoList);
app.use("/modifyList", modifyList);
app.use("/downloadButton", downloadButton);

app.get("/", (req, res) => {
  res.send(
    "The root. Basically our starting point. Try adding '/help' to the end of this URL..."
  );
});

app.get("/help", (req, res) => {
  res.render("Help");
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // console error details
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

app.use((req, res) => {
  console.log(
    "Error: This error only displays if all other routes were unable to respond."
  );
  res.status(404).json({ error: "Resource not found" });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
