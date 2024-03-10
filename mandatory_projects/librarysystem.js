// Define the Book object
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }
}

// Define the Library object
class Library {
  constructor() {
    this.books = [];
  }

  // Function to add a book to the library
  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    console.log(`"${title}" by ${author} has been added to the library.`);
  }

  // Function to display the list of available books
  displayAvailableBooks() {
    console.log("Available Books:");
    this.books.forEach(book => {
      if (book.available) {
        console.log(`${book.title} by ${book.author}`);
      }
    });
  }

  // Function to borrow a book
  borrowBook(title) {
    const bookIndex = this.books.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
      if (this.books[bookIndex].available) {
        this.books[bookIndex].available = false;
        console.log(`You have borrowed "${title}".`);
      } else {
        console.log(`"${title}" is currently unavailable.`);
      }
    } else {
      console.log(`"${title}" is not available in the library.`);
    }
  }

  // Function to return a book
  returnBook(title) {
    const bookIndex = this.books.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
      if (!this.books[bookIndex].available) {
        this.books[bookIndex].available = true;
        console.log(`You have returned "${title}".`);
      } else {
        console.log(`"${title}" was not borrowed.`);
      }
    } else {
      console.log(`"${title}" is not available in the library.`);
    }
  }
}

// Example usage
const library = new Library();

// Add some books to the library
library.addBook("book1", "Naima");
library.addBook("book2","Rita" );
library.addBook("book3","Diane" );

// Display available books
library.displayAvailableBooks();

// Borrow a book
library.borrowBook("book2");
library.borrowBook("book3");

// Display available books after borrowing
library.displayAvailableBooks();

// Return a book
library.returnBook("book3");

// Display available books after returning
library.displayAvailableBooks();
