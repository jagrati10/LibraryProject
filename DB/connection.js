const mongoose = require('mongoose');
const URI = 'mongodb+srv://LibraryManagementUser:passhere@cluster0.65roj.mongodb.net/<dbname>?retryWrites=true&w=majority';
const connectDB = () => {
 mongoose.connect(URI,{ useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
                            });
 
  console.log("db connected...");
};

module.exports = connectDB;