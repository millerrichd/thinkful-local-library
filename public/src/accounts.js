function findAccountById(accounts, id) {
  // return an object of the account
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // sort accounts by last name and return the whole object
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  //for each book, filter the borrow list, encase there is more than 1 per book...
  let numberBorrowed = 0
  books.forEach(book => {
    const result = book.borrows.find(entry => entry.id === account.id);
    if(result) numberBorrowed++;
  })
  return numberBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  //find the books checkedout by the account
  const booksCheckedOut = [];
  books.forEach(book => {
    const result = book.borrows.find(borrower => borrower.id === account.id && !borrower.returned);
    if(result) booksCheckedOut.push(book);
  });

  //for each book checked out, map out the new array object
  const booksWithAuthor = booksCheckedOut.map(book => {
    const author = authors.find(author => author.id === book.authorId)
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
