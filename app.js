const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookApi');
//const bookRouter = express.Router();
const Book = require('./models/bookModel');
const port = process.env.PORT || 3010;
const bookRouter = require('./routes/bookRouter')(Book);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
