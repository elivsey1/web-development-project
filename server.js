// basic configuration for Express.js implmetation and setting port number 
const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes for serving HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, public, 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, public, 'contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, public, 'about.html'));
});

// Form submission handling route
app.post('/submitForm', (req, res) => {
  const { name, email, comment } = req.body;

  // Validate email using a regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).send('Please enter a valid email address.');
  }



  // If all validations pass, proceed further
  // send a success response
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
