const express = require('express');
const path = require('path');
const hbs = require('hbs');
const serverless = require('serverless-http');

const app = express();

// Define paths for views and partials
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/commands', (req, res) => {
  res.render('commands');
});
app.get('/contacts', (req, res) => {
  res.render('contacts');
});

// Export the serverless function
module.exports.handler = serverless(app);
