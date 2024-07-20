// Importing the express module to create an Express application
const express = require("express");
// Importing the path module to handle and transform file paths
const path = require("path");
// Creating a new router object from the Express framework
const router = express.Router();

// Route to serve the notes page when a GET request is made to "/notes"
router.get("/notes", (req, res) => {
    // Resolving the path to the notes.html file located in the public directory
    const notesPath = path.resolve(__dirname, "../public/notes.html");
    // Sending the notes.html file as a response to the client
    res.sendFile(notesPath);
    // Uncomment the line below to log when the notes page is served
    // console.log("Serving notes.html");
});

// Route to serve the homepage for any other requests (wildcard route)
router.get("*", (req, res) => {
    // Resolving the path to the index.html file located in the public directory
    const indexPath = path.resolve(__dirname, "../public/index.html");
    // Sending the index.html file as a response to the client
    res.sendFile(indexPath);
    // Uncomment the line below to log when the homepage is served
    // console.log("Serving index.html");
});

// Exporting the router so it can be used in other parts of the application
module.exports = router;
