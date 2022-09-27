// import dependencies
const express = require("express");
const cors = require("cors");

// import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// create app object
const app = express();

// set up middleware
app.use(cors());

// home route for testing 
app.get("/", (req, res) => {
    res.send("hello world");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
    res.json(about);
});

// declare variable for port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));