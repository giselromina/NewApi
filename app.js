const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
if(process.env.ENV === 'Test'){
  console.log('This is a Test');
  const db = mongoose.connect('mongodb://localhost/bookApi_Test');
}else{
  console.log('This is for real');
  const db = mongoose.connect('mongodb://localhost/bookApi');
}
//const db = mongoose.connect('mongodb://localhost/bookApi');

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

module.exports = app;
