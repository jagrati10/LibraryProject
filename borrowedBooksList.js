
const router = require('express').Router();
const BorrowedBooks = require('./DB/borrowedBooksSchema');

//get all data
router.route('/AllBorrowedBooks').get((req, res) => {
    BorrowedBooks.find()
        .then(userdata => res.json(userdata))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get specific data
router.route('/:id').get((req, res) => {
    BorrowedBooks.findById(req.params.id)
        .then(userdata => res.json(userdata))
        .catch(err => res.status(400).json('Error: ' + err));

});

//post new Borrwoed book data
router.route('/newBorrowedBooks').post((req, res) => {

    const UserId = req.body.UserId;
    const BookId = req.body.BookId;
    const BorrowedOn = req.body.BorrowedOn;

    const newBorrowedBooks = new BorrowedBooks({

        UserId,
        BookId,
        BorrowedOn

    });
    
    newBorrowedBooks.save()
        .then(() => res.json(newBorrowedBooks))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;