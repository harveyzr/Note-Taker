// Importing required modules
const fs = require("fs"); // File system module for handling file operations
const util = require("util"); // Utility module for promisifying functions
const express = require("express"); // Importing Express framework
const app = express.Router(); // Creating a new router object from Express

// Promisifying the file read and write functions for asynchronous use
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// Variable to hold the notes data
let notesData = [];

// GET request to retrieve all notes
app.get("/notes", async (req, res) => {
  try {
    // Asynchronously read the notes from the JSON file
    const data = await readFileAsync("db/db.json", "utf8");
    // Parse the JSON data to convert it into an array of note objects
    notesData = JSON.parse(data);
    // Send the notes data back as a JSON response
    res.json(notesData);
  } catch (error) {
    // Handle errors during file reading
    console.error("Error reading notes:", error);
    res.status(500).send("Internal Server Error");
  }
});

// POST request to add a new note
app.post("/notes", async (req, res) => {
  try {
    // Asynchronously read the current notes from the JSON file
    const data = await readFileAsync("db/db.json", "utf8");
    // Parse the JSON data to get the existing notes
    notesData = JSON.parse(data);

    // Create a new note object from the request body
    const newNote = { ...req.body, id: notesData.length + 1 }; // Assign a new ID

    // Add the new note to the existing notes array
    notesData.push(newNote);

    // Convert the updated notes array back to a JSON string
    const updatedNotes = JSON.stringify(notesData);

    // Asynchronously write the updated notes back to the JSON file
    await writeFileAsync("db/db.json", updatedNotes);
    console.log("Note has been added.");
    
    // Send the updated notes data back as a JSON response
    res.json(updatedNotes);
  } catch (error) {
    // Handle errors during file reading or writing
    console.error("Error adding note:", error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE request to remove a note by ID
app.delete("/notes/:id", async (req, res) => {
  const selID = parseInt(req.params.id); // Parse the ID from the request parameters

  try {
    // Asynchronously read the current notes from the JSON file
    const data = await readFileAsync("db/db.json", "utf8");
    notesData = JSON.parse(data); // Parse the JSON data

    // Filter out the note with the specified ID
    notesData = notesData.filter(note => note.id !== selID);

    // Convert the updated notes array back to a JSON string
    const updatedNotes = JSON.stringify(notesData, null, 2);

    // Asynchronously write the updated notes back to the JSON file
    await writeFileAsync("db/db.json", updatedNotes);
    console.log("Note has been deleted.");

    // Send the updated notes data back as a JSON response
    res.json(notesData);
  } catch (error) {
    // Handle errors during file reading or writing
    console.error("Error deleting note:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Exporting the app for use in other modules
module.exports = app;
