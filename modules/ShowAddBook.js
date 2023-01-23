const ShowAddBook = (addBookSec, addBookBtn, booksList, contactSec) => {
  addBookBtn.addEventListener('click', () => {
    addBookSec.classList.remove('hidden');
    booksList.classList.add('hidden');
    contactSec.classList.add('hidden');
  });
};

export default ShowAddBook;
