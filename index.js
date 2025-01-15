//library  management  system
const library = {};

// Add a book to the library

function addBook(title, author, availability) {
  const bookId = Object.keys(library).length + 1 ;
  library[bookId] = {
    title,
    author,
    availability,
  };
  return bookId;
}
addBook("mathematics" , "jeanMarie" , true);
// displaying the list of books  Available in libray

function displayBooks() {
  if (Object.keys(library).length === 0) {
    console.log("No books available in the library.");
    return;
  }

  for (const bookId in library) {
      const book = library[bookId];
      
      //if the book is available in the library
      if (book.availability) {
        console.log("Available books in the library:");
        console.log(`${book.title} by ${book.author}`);
      }
      else(
        console.log('no book available in the library')
      )
    }
    return library;
    
  }

displayBooks();

// borrow a book  as updatting its availability

function borrowBook(bookId) {
  if (!library[bookId]) {
    console.log("Book not found.");
    return;
  }

  const book = library[bookId];

  if (!book.availability) {
    console.log("This book is already borrowed.");
    return;
  }

  book.availability = false;
  console.log(`You have borrowed ${book.title} by ${book.author}`);
}

borrowBook("2");
//returning back the book

function returnBook(bookId) {
  if (!library[bookId]) {
    console.log("Book not found.");
    return;
  }

  const book = library[bookId];

  if (book.availability) {
    console.log("This book is already available.");
    return;
  }

  book.availability = true;
  console.log(`You have returned ${book.title} by ${book.author}`);
}