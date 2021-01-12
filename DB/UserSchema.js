var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        UserName: {
            type: String,
            require: true
        },

        BorrowedBooksTitle: {
            type: String,
            require: true
        },

        LastBorrowedOn: {
            type: String,
            require: true
        },

        NumberofBorrowedBooks: {
            type: Number,
            default: 0,
            require: true
        },

    }, { timestamps: true });

module.exports = mongoose.model("UserDetails", UserSchema);

