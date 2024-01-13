const express = require('express');
const app = express();
const ejs = require('ejs');
const functions = require('./functions');


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
  res.render('index', { name: 'World', functions }); // Render the index.ejs template
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

