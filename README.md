# Specification about the routes I have created 

# Server.js
This is where the code starts. It has the server activation and routes address.

# manageBooks.js
 This gives the entire list of Books, also gives book information using Id and can create a new Book entry.

 # UserDetails.js

This route gives the information about user and whick book is borrowed by user and date.

# borrowedBooks.js
This contains the borrowed books data. 
1. Book ID
2. User Id
3. Borrowed date

# How Run the code

//use this to run different routes
// const ManageBooksRouter = require('./manageBooks');
// app.use('/', ManageBooksRouter);

// const userdetailsRouter = require('./UserDetails');
// app.use('/', userdetailsRouter);

const borrowedBooksRouter = require('./borrowedBooksList');
app.use('/', borrowedBooksRouter);

# Uncomment that route which You want to run and then try the api on postman to check the response.