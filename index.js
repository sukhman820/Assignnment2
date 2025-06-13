const mongoose = require('mongoose');
const Book = require('./models/book');
const Borrower = require('./models/borrowers');

mongoose.connect('mongodb://127.0.0.1:27017/library')
  .then(() => {
    console.log("MongoDB connected");
    return Promise.all([Book.find(), Borrower.find()]);
  })
  .then(([books, borrowers]) => {
    console.log("Books:", books);
    console.log("Borrowers:", borrowers);
    process.exit();
  })
  .catch(err => {
    console.error("DB Connection Error:", err);
    process.exit(1);
  });
