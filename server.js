// Importing the required modules
const express = require('express'); // Importing the Express framework
const path = require('path'); // Importing the path module for handling file paths
const apiRoutes = require('./routes/apiRoutes'); // Importing API routes from a separate module
const htmlRoutes = require('./routes/htmlRoutes'); // Importing HTML routes from a separate module

// Creating an instance of an Express application
const app = express(); 

// Setting the port for the application to listen on
const PORT = process.env.PORT || 3003; // Use the environment variable PORT or default to 3003

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like CSS and JS

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data

// Setting up the routes for the application
app.use('/api', apiRoutes); // Mounting the API routes at the /api endpoint
app.use('/', htmlRoutes); // Mounting the HTML routes at the root endpoint

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`); // Log a message when the server starts
});

// Exporting the app instance for use in other modules
module.exports = app; 
