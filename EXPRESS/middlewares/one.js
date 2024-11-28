//custom middleware

const express = require('express');
const app = express();

// Custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware
};

// Use the middleware
app.use(logger);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
