/**
 * INSTALLATIONS:
 * npm install express
 * npm install nodemon
 * npm install jsx-view-engine
 * npm install method-override
 * npm install body-parser
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
const todoList = require("./routes/todoList");
const modifyList = require("./routes/modifyList");
const downloadButton = require("./routes/downloadButton");

// third party middleware variables
const methodOverride = require("method-override"); // npm install method-override
const bodyParser = require("body-parser"); // npm install body-parser

// initial custom middleware
app.use((req, res, next) => {
  console.log("I run from all middleware.");
  next();
});

app.use((req, res, next) => {
  const currentDate = new Date();
  console.log(
    `-----
        ${currentDate.toLocaleDateString()}: Received a ${
      req.method
    } request to ${req.url}.`
  );
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Containing the data:`);
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// import routes and middleware variables we just created
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions
app.use(bodyParser.json({ extended: true }));
app.use(methodOverride("_method"));
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

app.use((req, res) => {
  console.log(
    "Error: This error only displays if all other routes were unable to respond."
  );
  res.status(404).json({ error: "Resource not found" });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
