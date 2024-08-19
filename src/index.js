const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set up Handlebars
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './templates/views');

// Serve static files
app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
