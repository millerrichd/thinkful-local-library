/*
findId ::
  Input: An object to search and an id to search for.
  Output: The object that matches or undefined.
*/
function findId(object, id) {
  return object.find(obj => obj.id === id)
}

/*
findAuthorById ::
  Input: Array of author objects, and an id to look for.
  Output: the author object that is requested or undefined.
*/
function findAuthorById(authors, id) {
  return findId(authors, id);
}

/*
findBookById ::
  Input: Array of book objects, and an id to look for.
  Output: the book object that is requested or undefined.
*/
function findBookById(books, id) {
  return findId(books, id);
}

/*
partitionBooksByBorrowedStatus ::
  Input: Array of book objeccts
  Output: Array of Arrays of books objects separated by borrowed and returned.
*/
function partitionBooksByBorrowedStatus(books) {
  // separate books into borrowed (returned === false) and returened (returned === true)
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);

  //combine the two arrays into an array of arrays.
  const partitionedBooks = [
    borrowedBooks,
    returnedBooks
  ];
  return partitionedBooks;
}

/*
getBorrowersForBook ::
  Input: A single book object and an array of account objects.
  Output: An array of accounts, up to 10, that have borrowed the book.
*/
function getBorrowersForBook(book, accounts) {
  //loop the book.borrows then for each borrow id find in accounts
  //and push with a new array with the returned status appended.
  //only push the new array if the number of found is less than 10, we don't want to add 11+ to the array.
  const borrowerAccounts = []
  book.borrows.forEach(borrower => {
    const account = accounts.find(account => account.id === borrower.id);
    const returned = borrower.returned;
    if(borrowerAccounts.length < 10) {
      borrowerAccounts.push({
        ...account,
        returned
      });
    }
  })
  return borrowerAccounts;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
