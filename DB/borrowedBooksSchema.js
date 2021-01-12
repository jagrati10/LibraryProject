var mongoose = require('mongoose');

var borrowedBookSchema = new mongoose.Schema(
    {
        UserId: {
            type: String,
            require: true
        },

        BookId: {
            type: String,
            require: true
        },

        BorrowedOn: {
            type: String,
            require: true
        },

    }, { timestamps: true });

module.exports = mongoose.model("BorrowedBooks", borrowedBookSchema);

