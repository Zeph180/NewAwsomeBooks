const ContactPage = (contactBtn, contactSec, addBookSec, booksList) => {
  contactBtn.addEventListener('click', () => {
    contactSec.classList.remove('hidden');
    addBookSec.classList.add('hidden');
    booksList.classList.add('hidden');
  });
};

export default ContactPage;