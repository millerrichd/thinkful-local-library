function getTotalCount(object) {
  return object.length;
}

function getTotalBooksCount(books) {
  return getTotalCount(books);
}

function getTotalAccountsCount(accounts) {
  return getTotalCount(accounts);
}

function getBooksBorrowedCount(books) {
  const totalBorrowedBooks = books.filter(book => {
    return !book.borrows[0].returned;
  });
  return totalBorrowedBooks.length
}

function sortNameCountArray(arr) {
  arr.sort((objA, objB) => {
    return objB.count - objA.count
  });
  return arr;
}

function returnFive(arr) {
  const newArr = []
  arr.forEach(obj => {
    if(newArr.length < 5) newArr.push(obj);
  });
  return newArr;
}

function getMostCommonGenres(books) {
  //we don't know the genre ahead of time so loop to find all the genre and their count. easier to put into an object.
  const genresObj = {};
  books.forEach(book => {
    if(!genresObj[book.genre]) { 
      genresObj[book.genre] = 0;
    }
    genresObj[book.genre]++
  })
  //convert the object to the desired array of objects format.
  let genresArr = Object.keys(genresObj).map(name => {
    const count = genresObj[name]
    return {
      name,
      count
    }
  })
  //sort based on the count
  genresArr = sortNameCountArray(genresArr)
  //use the helper function to return only five
  return returnFive(genresArr);
}

function getMostPopularBooks(books) {
  //create the desired array output by cycling through all the books and counting up their borrows length
  let booksPopularity = books.map(book => {
    const name = book.title;
    const count = book.borrows.length;
    return {
      name,
      count
    }
  })
  //sort the array by count
  booksPopularity = sortNameCountArray(booksPopularity);
  //use the helper function to return only five
  return returnFive(booksPopularity);
}

function getMostPopularAuthors(books, authors) {
//for each author: filter the books and reduce the total borrows
  let authorPopularity = authors.map(author => {
    const name = `${author.name.first} ${author.name.last}`;
    const filterBooks = books.filter(book => author.id === book.authorId)
    const count = filterBooks.reduce((total, book) => {
      return total + book.borrows.length;
    }, 0);
    return { name, count };
  });
  //sort the array by count
  authorPopularity = sortNameCountArray(authorPopularity);
  //use the helper function to return only five
  return returnFive(authorPopularity);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
