// Importing modules
const express = require("express");
const app = express();

// Add body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//get CSS styles & use ejs as view engine
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

const PORT = 8080; //default port 8080

//Route for main page
app.get("/", (req, res) => {
  const templateVars = {};
  res.render("index", templateVars);
    
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});



   