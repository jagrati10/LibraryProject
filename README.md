# Prerequisites

NodeJS
Tools like Postman for API testing

# Steps to run the code
# Look for these lines in server.js file and uncomment one of these

1)
// const ManageBooksRouter = require('./manageBooks');
// app.use('/', ManageBooksRouter);

2)
// const userdetailsRouter = require('./UserDetails');
// app.use('/', userdetailsRouter);

3)
//const borrowedBooksRouter = require('./borrowedBooksList');
//app.use('/', borrowedBooksRouter);

# for execution write these commands in git bash terminal

1) npm install 

It will install all the package I have used 

2) node server.js 

It will start the server and give you a port number, copy the port number and use that to hit the api

3) everytime when you uncomment the routes in server js file, you have to run (node server.js) 


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

