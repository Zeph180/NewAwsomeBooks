import ShowAddBook from './modules/ShowAddBook.js';
import ListBooks from './modules/ListBooks.js';
import ContactPage from './modules/ContactPage.js';
import render from './modules/render.js';
import AddBook from './modules/AddBook.js';
import TimeAndDate from './modules/TimeAndDate.js';
import { books, bookData } from './modules/Books.js';

const buttonAdd = document.querySelector('#add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookDisplay = document.querySelector('#book-section');
const currentDate = document.querySelector('.date');
const addBookBtn = document.getElementById('link-add-Book');
const listBookBtn = document.getElementById('link-list');
const contactBtn = document.getElementById('link-contact');
const booksList = document.getElementById('books-list');
const addBookSec = document.getElementById('add-book');
const contactSec = document.getElementById('contact');

ShowAddBook(addBookSec, addBookBtn, booksList, contactSec);
ListBooks(addBookSec, listBookBtn, booksList, contactSec);
ContactPage(contactBtn, contactSec, addBookSec, booksList);

currentDate.innerHTML = `
  ${TimeAndDate()}
`;

const removeBook = (index) => {
  bookData.removeBook(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render(bookDisplay, books, removeBook);
};

render(bookDisplay, books, removeBook);

buttonAdd.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  if (title !== '' && author !== '') {
    AddBook(title, author, render, bookDisplay, books, removeBook, bookData);
  }
  bookTitle.value = '';
  bookAuthor.value = '';
});

if (books.length === 0) {
  bookDisplay.innerHTML = `
    <p>No book added!</p>
  `;
}