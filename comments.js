// Create web server
// Run the server
// Test the server

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// const comments = require('./comments');

app.use(bodyParser.json());

const comments = [
  {
    id: 1,
    username: 'alice',
    comment: 'I love the way you write!',
  },
  {
    id: 2,
    username: 'bob',
    comment: 'I love the way you write!',
  },
  {
    id: 3,
    username: 'charlie',
    comment: 'I love the way you write!',
  },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Test the server
// In the terminal, run the server with node comments.js
// In the browser, navigate to http://localhost:3000/comments
// You should see the comments array
// In the terminal, use curl to post a new comment
// curl -X POST -H "Content-Type: application/json" -d '{"username": "dave", "comment": "I love the way you write!"}' http://localhost:3000/comments
// In the browser, navigate to http://localhost:3000/comments
// You should see the new comment at the end of the comments array
// You can also use Postman to post a new comment
// In Postman, select the