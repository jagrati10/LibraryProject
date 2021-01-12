var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            require: true
        },
        
        title: {
            type: String,
            require: true
        },

        author: {
            type: String,
            require: true
        },

        quantity: {
            type: Number,
            default: 0,
            require: true
        },

    }, { timestamps: true });

module.exports = mongoose.model("Books", BookSchema);

