const router = require('express').Router();
const Books = require('./DB/schemaB');


//get all the books list
router.route('/AllBooks').get((req, res) => {
    Books.find()
        .then(userdata => res.json(userdata))
        .catch(err => res.status(400).json('Error: ' + err));
});


//get specific specific book data
router.route('/:id').get((req, res) => {
    Books.findById(req.params.id)
        .then(userdata => res.json(userdata))
        .catch(err => res.status(400).json('Error: ' + err));

});

//post new Book data
router.route('/newBooks').post((req, res) => {

    const date = req.body.date;
    const title = req.body.title;
    const author = req.body.author;
    const quantity = Number(req.body.quantity);

    const newBooks = new Books({

        date,
        title,
        author,
        quantity,
    });


    newBooks.save()
        .then(() => res.json(newBooks))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;