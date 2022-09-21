function findId(object, id) {
  return object.find(obj => obj.id === id)
}

function findAuthorById(authors, id) {
  return findId(authors, id);
}

function findBookById(books, id) {
  return findId(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);

  const partitionedBooks = [
    borrowedBooks,
    returnedBooks
  ];
  return partitionedBooks;
}

function getBorrowersForBook(book, accounts) {
  //loop the book.borrows then for each borrow id find in accounts and push with a map
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
