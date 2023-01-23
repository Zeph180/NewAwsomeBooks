const ListBooks = (addBookSec, listBookBtn, booksList, contactSec) => {
  listBookBtn.addEventListener('click', () => {
    addBookSec.classList.add('hidden');
    booksList.classList.remove('hidden');
    contactSec.classList.add('hidden');
  });
};

export default ListBooks;