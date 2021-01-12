const router = require('express').Router();
const UserDetails = require('./DB/UserSchema');

//get all data
router.route('/AllUsers').get((req, res) => {
    UserDetails.find()
        .then(userdata => res.json(userdata))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get specific data
router.route('/:id').get((req, res) => {
    UserDetails.findById(req.params.id)
        .then(userdata => res.json(userdata))
        .catch(err => res.status(400).json('Error: ' + err));

});

//post new user data
router.route('/newUser').post((req, res) => {

    const UserName = req.body.UserName;
    const BorrowedBooksTitle = req.body.BorrowedBooksTitle;
    const LastBorrowedOn = req.body.LastBorrowedOn;
    const NumberofBorrowedBooks = Number(req.body.NumberofBorrowedBooks);

    const newDetails = new UserDetails({

        UserName,
        BorrowedBooksTitle,
        LastBorrowedOn,
        NumberofBorrowedBooks

    });

    newDetails.save()
        .then(() => res.json(newDetails))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;