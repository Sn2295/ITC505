const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password123') {
        res.cookie('name', username);
        res.cookie('email', 'admin@example.com');
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials'); // 401 Unauthorized
    }
});

// Define routes with different HTTP status codes
app.get('/home', (req, res) => {
    res.status(200).send('Welcome to Home Page'); // 200 OK
});

app.get('/about', (req, res) => {
    res.status(200).send('About Us'); // 200 OK
});

app.get('/error', (req, res) => {
    res.status(500).send('Internal Server Error'); // 500 Internal Server Error
});

app.use((req, res) => {
    res.status(404).send('Page Not Found'); // 404 Not Found
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
