/*
findAccountById ::
  Input: Array of account objects and the id to match against.
  Output: The matched account object or undefined.
*/
function findAccountById(accounts, id) {
  // return an object of the account
  return accounts.find(account => account.id === id);
}

/*
sortAccountsByLastName ::
  Input: Array of account objects.
  Output: Array of account objects sorted by each of the accounts last name.
*/
function sortAccountsByLastName(accounts) {
  // sort accounts by last name and return the whole object
  // use toLowerCase() to make sure they sort correctly regardless of if they are 'A-Z' or 'a-z'.
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1);
  return accounts;
}

/*
getTotalNumberOfBorrows ::
  Input: A single account object and an Array of book objects.
  Output: A number from 0 or larger that is the total number of borrows for that account
*/
function getTotalNumberOfBorrows(account, books) {
  let numberBorrowed = 0
  books.forEach(book => {
    //for each book, find the account on the borrow list
    const result = book.borrows.find(entry => entry.id === account.id);
    //if there is a match, increment the number borrowed
    if(result) numberBorrowed++;
  })
  return numberBorrowed;
}

/*
getBooksPossessedByAccount ::
  Input: Account object, array of book objects, and an array of author objects.
  Output: Array of books, with the author information embedded in the array that the account has borrowed.
*/
function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = [];
  books.forEach(book => {
    //find the books checkedout by the account and that they have not returned yet.
    const result = book.borrows.find(borrower => borrower.id === account.id && !borrower.returned);
    //if there is a result add the result to the book array.
    if(result) booksCheckedOut.push(book);
  });

  //for each book checked out, map out the new array object
  const booksWithAuthor = booksCheckedOut.map(book => {
    //find the author information based on the book authorId.
    const author = authors.find(author => author.id === book.authorId)

    //return the book with the author information embedded into the object.
    return {
      ...book,
      author
    };
  });
  return booksWithAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
