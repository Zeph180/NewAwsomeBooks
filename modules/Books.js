export default class Books {
  constructor(books) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }
}

export const books = JSON.parse(localStorage.getItem('books')) || [];
export const bookData = new Books(books);