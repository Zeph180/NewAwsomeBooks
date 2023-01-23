const AddBook = (title, author, render, bookDisplay, books, removeBook, bookData) => {
  const book = { title, author };
  bookData.addBook(book);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render(bookDisplay, books, removeBook);
};

export default AddBook;