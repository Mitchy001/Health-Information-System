const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data (if needed later)
app.use(express.urlencoded({ extended: true }));

// Serve static files (like your index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission (optional, if you want to do something with submitted data)
app.post('/register', (req, res) => {
  console.log('Form Data:', req.body);
  res.send('Client Registered Successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



// // server.js

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data
app.use(bodyParser.json()); // For parsing JSON data

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Route for the Enroll Form
app.get('/enroll', (req, res) => {
  res.sendFile(__dirname + '/public/enroll.html'); // Serve the HTML form
});

// POST route for processing form data
app.post('/enroll', (req, res) => {
  const { name, age, gender, address, programs } = req.body;
  
  // Logic to handle data (store in database, etc.)
  console.log('New Client Enrolled:', { name, age, gender, address, programs });

  // For now, let's just send a success message back
  res.send(`<h1>Client ${name} successfully enrolled!</h1>`);
});

// Basic Home Route (optional)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Health System</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
