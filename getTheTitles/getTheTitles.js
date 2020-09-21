const getTheTitles = function(books) {
   let arr = [];
   books.forEach((book)=>arr.push(book.title));
   console.log(arr);
   return arr;
}

module.exports = getTheTitles;
