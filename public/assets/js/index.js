// Define jQuery objects for various HTML elements
var $noteTitle = $(".note-title"); // Title of the note
var $noteText = $(".note-textarea"); // Text content of the note
var $saveNoteBtn = $(".save-note"); // Button to save the note
var $newNoteBtn = $(".new-note"); // Button to create a new note
var $noteList = $(".list-container .list-group"); // List of notes

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
  return $.ajax({
    url: "/api/notes", // API endpoint to get notes
    method: "GET" // HTTP method
  });
};

// A function for saving a note to the db
var saveNote = function(note) {
  return $.ajax({
    url: "/api/notes", // API endpoint to save notes
    data: note, // Data to be sent to the server
    method: "POST" // HTTP method
  });
};

// A function for deleting a note from the db
var deleteNote = function(id) {
  return $.ajax({
    url: "api/notes/" + id, // API endpoint to delete a note
    method: "DELETE" // HTTP method
  });
};

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function() {
  $saveNoteBtn.hide();

  if (activeNote.id) {
    $noteTitle.attr("readonly", true);
    $noteText.attr("readonly", true);
    $noteTitle.val(activeNote.title);
    $noteText.val(activeNote.text);
  } else {
    $noteTitle.attr("readonly", false);
    $noteText.attr("readonly", false);
    $noteTitle.val("");
    $noteText.val("");
  }
};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
  var newNote = {
    title: $noteTitle.val(),
    text: $noteText.val()
  };

  saveNote(newNote).then(function(data) {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
var handleNoteDelete = function(event) {
  // prevents the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();

  var note = $(this)
    .parent(".list-group-item")
    .data();

  if (activeNote.id === note.id) {
    activeNote = {};
  }

  deleteNote(note.id).then(function() {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote and displays it
var handleNoteView = function() {
  activeNote = $(this).data();
  renderActiveNote();
};

// Sets the activeNote to an empty object and allows the user to enter a new note
var handleNewNoteView = function() {
  activeNote = {};
  renderActiveNote();
};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

// Render's the list of note titles
var renderNoteList = function(notes) {
  $noteList.empty();

  var noteListItems = [];

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var $li = $("<li class='list-group-item'>").data(note);
    var $span = $("<span>").text(note.title);
    var $delBtn = $(
      "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
    );

    $li.append($span, $delBtn);
    noteListItems.push($li);
  }

  $noteList.append(noteListItems);
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
  return getNotes().then(function(data) {
    renderNoteList(data);
  });
};

// Event listeners
$saveNoteBtn.on("click", handleNoteSave); // Save note when save button is clicked
$noteList.on("click", ".list-group-item", handleNoteView); // Display note when a note in the list is clicked
$newNoteBtn.on("click", handleNewNoteView); // Create a new note when new note button is clicked
$noteList.on("click", ".delete-note", handleNoteDelete); // Delete note when delete button is clicked
$noteTitle.on("keyup", handleRenderSaveBtn); // Show or hide save button when typing in the note title
$noteText.on("keyup", handleRenderSaveBtn); // Show or hide save button when typing in the note text

// Gets and renders the initial list of notes
getAndRenderNotes();
