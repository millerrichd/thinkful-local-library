# thinkful-local-library

## Project

This is a project for Thinkful Engineering program, where I created various functions to enable support for a library website.

## Prompt

Your neighborhood has decided to put together a local library where people can lend and borrow books. One of the most important features needed to organize this is a dashboard that will show which books are available, which are currently out, and other general statistics about the program.

Other people are taking care of the logistics and design, but they need you to build the algorithms!

## Notes

The UI and tests were made by Thinkful and the project is for me to write the algorithms.

### Requirements

* All tests are passing in Qualified.
* The project doesn't include any single-letter variables.
* The project makes at least one use of an arrow function.
* The project makes at least one use of each of the following native array methods: find(), filter(), map(), and reduce().
* The project employs at least one helper function, which helps support the tested functions.
* The project uses at least two of the following JavaScript features: the ternary operator, the spread operator, object shorthand, array or object destructuring, and for/in loops.

## Functions

The list of functions that I wrote and there intended use.

### Accounts

`findAccountById(accounts, id)`
Locates an account object within an array of account objects.

`sortAccountsByLastName(accounts)`
Returns an sorted array by lastname of the account objects.

`getTotalNumberOfBorrows(account, books)`
For a given account object, how many books have they borrowed.

`getBooksPossessedByAccount(account, books, authors)`
For a given account object, how many books do they currently have checked out. Includes the author name instead of just their system id number in the returned array of book objects.

### Books

`findId(object, id)`
Helper function to demonstrate that I can write helper functions. It just returns an object based on an id.

`findAuthorById(authors, id)`
Returns the author object that matches the id.

`findBookById(books, id)`
Returns the book object that matches the id.

`partitionBooksByBorrowedStatus(books)`
Returns an array of array books separated by the borrowed and returned status.

`getBorrowersForBook(book, accounts)`
Returns all of the borrowers for a given book, up to a max of 10 people.

### Home

`getTotalCount(object)`
Helper function, returns the total count of an object.

`getTotalBooksCount(books)`
Returns the total count of book objects.

`getTotalAccountsCount(accounts)`
Returns the total count of account objects.

`getBooksBorrowedCount(books)`
Returns the total count of books that are borrowed.

`sortNameCountArray(arr)`
Helper function, return an array of sorted objects by count.

`returnFive(arr)`
Helper function, return just an array of five or less objects.

`getMostCommonGenres(books)`
Return the most, five max, common genres.

`getMostPopularBooks(books)`
Return the most, five max, popular books.

`getMostPopularAuthors(books, authors)`
Return the most, five max, popular authors.