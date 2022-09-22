/*
getTotalCount ::
  Input: Array of objects
  Output: Number in the array.
*/
function getTotalCount(object) {
  return object.length;
}

/*
getTotalBooksCount ::
  Input: Array of book objects
  Output: Number in the array.
*/
function getTotalBooksCount(books) {
  return getTotalCount(books);
}

/*
getTotalAccountsCount ::
  Input: Array of account objects
  Output: Number in the array.
*/
function getTotalAccountsCount(accounts) {
  return getTotalCount(accounts);
}

/*
getBooksBorrowedCount ::
  Input: Array of book objects
  Output: Number of currently borrowed books
*/
function getBooksBorrowedCount(books) {
  //since the first item in borrows is always the most recent, we can just filter on books and check that value.
  //return only the false records by using not(!) returned.
  const totalBorrowedBooks = books.filter(book => {
    return !book.borrows[0].returned;
  });
  //return the final total
  return totalBorrowedBooks.length
}

/*
sortNameCountArray ::
  Input: Array of objects in the format of [{name: xyz, count: 1}]
  Output: A sorted by count array.
*/
function sortNameCountArray(arr) {
  arr.sort((objA, objB) => {
    return objB.count - objA.count
  });
  return arr;
}

/*
returnFive ::
  Input: Array of objects in the format of [{name: xyz, count: 1}]
  Output: An array of only five or fewer items.
*/
function returnFive(arr) {
  const newArr = []
  //loop the input array and add them to the new array only if they are currently less than 5 in the new array
  arr.forEach(obj => {
    if(newArr.length < 5) newArr.push(obj);
  });
  return newArr;
}

/*
getMostCommonGenres ::
  Input: An array of book objects
  Output: An array of five objects in the format of [{name: xyz, count: 1}] that are the most common genres
*/
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

/*
getMostPopularBooks ::
  Input: An array of book objects
  Output: An array of five objects in the format of [{name: xyz, count: 1}] that are the most popular books
*/
function getMostPopularBooks(books) {
  //create the desired array output by cycling through all the books and counting up their borrows length
  let booksPopularity = books.map(book => {
    const name = book.title;
    const count = book.borrows.length;
    //return an object that is in the format of {name: xyz, count: 1}
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

/*
getMostPopularAuthors ::
  Input: An array of book objects and an array of author objects
  Output: An array of five objects in the format of [{name: xyz, count: 1}] that are the most popular authors.
*/
function getMostPopularAuthors(books, authors) {
  let authorPopularity = authors.map(author => {
    const name = `${author.name.first} ${author.name.last}`;
    //for each author: filter the books and reduce the total borrows 
    const filterBooks = books.filter(book => author.id === book.authorId)
    //add up all the lengths
    const count = filterBooks.reduce((total, book) => {
      return total + book.borrows.length;
    }, 0);
    //return the desired object
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
