# Social-Network-Api

## Table of Contents

 - [Description](#description)
 - [User Story](#user-story)
 - [Acceptance Criteria](#acceptance-criteria)
 - [Technologies](#technologies)
 - [Tests](#tests)
 - [Images](#images)
 - [Link To Recorded Video](#link-to-recorded-videos)
 - [Link to GitHub Pages ](#link-to-gethub-website)
 - [Skills Used](#skills-used)

 ## Description
This API is designed for a social network web application that allows users to share their thoughts, react to friends' thoughts, and manage a friends list. Here’s a detailed breakdown of the technologies and functionalities involved:

 Social-Network is the seven-tenth challenge for the Ohio State coding boot camp.
-	My motivation for this project was to become proficient at coding backend with JavaScript, Express.js, Node.js, MongoDb, Mongoose, Insomnia, Moment.js.  
-	Building this project allowed me to implement coding techniques that I have been studying for the 17 weeks. 
-	This page was a perfect example of real-world practices and how to write backend code. 
-	I learned how to code and test routes for a backend Social-Network.  

 ## User Story
- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data
 
 ## Acceptance Criteria
- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand -    column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a "Save Note" button and a "Clear Form" button appear in the navigation at  the top of the page
- WHEN I click on the Save button
- THEN the new note I have entered is saved and appears in the left-hand column  with the other existing notes and the buttons in the navigation disappear
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
- WHEN I click on the "New Note" button in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Technologies 
[Express.js](https://expressjs.com/)
    - Routing: Express.js handles the routing for our API, directing HTTP requests to the appropriate handlers.
    - Middleware: Utilizes middleware for parsing JSON, handling errors, and managing sessions/authentication.

[MongoDB](https://www.mongodb.com/)
   - Database: MongoDB serves as the database, storing information about users, thoughts, reactions, and friend lists.
   -  NoSQL Database: Allows for flexible and scalable storage of JSON-like documents.

[Mongoose](https://mongoosejs.com/)
   - Object Data Modeling (ODM): Mongoose provides a straightforward, schema-based solution to model our application    data.
   - Schema Definitions: Defines schemas for users, thoughts, and reactions, ensuring data consistency and integrity.
   -  Validation and Middleware: Offers built-in validation and middleware support to enforce rules and perform actions before or after saving data.

[Moment.js](https://www.npmjs.com/package/moment)
   - Timestamp Formatting: Moment.js is used to format timestamps, providing readable and consistent date and time    formatting across the application.
   - Date Manipulation: Simplifies date manipulation and formatting, making it easier to display human-readable timestamps.

[Insomnia](https://insomnia.rest/)
   - API Testing: Insomnia is utilized to test API endpoints and ensure they work correctly.
   - Seed Data Creation: Facilitates the creation of seed data by sending HTTP requests to populate the database with initial data for testing and development.

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Node.js](https://nodejs.org/en/)

## Tests
Insomnia plays a crucial role in managing the user database for our social network web application. It is utilized for various operations, including adding, updating, and removing entities within the database. Here’s a breakdown of how Insomnia is employed:

   **USER**
   - Create a new user: `POST /api/users`
   - Get all users: `GET /api/users`
   - Get a single user by its `id`: `GET /api/users/:userId`
   - Update a user by its `id`: `PUT /api/users/:userId`
   - Delete a user by its `id`: `DELETE /api/user/:userId`

   **THOUGHT**
   - Create a new thought: `POST /api/thoughts/`
   - Get all thoughts: `GET /api/thoughts/`
   - Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
   - Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
   - Delete a thought by its `id`: `DELETE /api/thoughts/:thoughtId`

   **REACTION**
   - Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
   - Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`

 ## Images
![Website Preview](public/assets/img/Social%20Api.gif)
 
 ## Link to recorded videos
[Part 1](https://www.loom.com/share/2e998435c90441caa3a8c48f17949711?sid=b954204d-4c99-432e-8574-9de211fc47ec)

[part 2](https://www.loom.com/share/f2376b3e73124e8baabbb3b1a77c5f22?sid=89a4ba28-b8af-4251-b7c6-2c34c388e111)

[part 3](https://www.loom.com/share/e36b8c752b8d432bbb326d71ccd6ac0c?sid=7ee6191d-4366-48b0-91d4-35eacdb74600)
 
## Link to GetHub Website
https://github.com/harveyzr/Social-Network-Api


 ## Skills Used
- node 
- JavaScript
- Insomnia
- Mongoose
- MogoDB
- Express.js
