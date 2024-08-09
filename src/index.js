const express = require("express");
const path = require("path");
const hbs = require("hbs");
const serverless = require("serverless-http");

const app = express();

// Define paths for views and partials
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname, '../templates/partials');

// Set up Handlebars
app.set("view engine", "hbs");
app.set('views', templatepath);
hbs.registerPartials(partialspath);

// Serve static files
app.use(express.static(staticpath));

// Define routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/commands", (req, res) => {
  res.render("commands");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

// Export serverless function
module.exports.handler = serverless(app);
