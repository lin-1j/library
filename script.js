const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);

  render();
}

let addBook = document.querySelector('.add-book');
addBook.addEventListener('click', () => {
  let newBookForm = document.querySelector('.new-book-form');
  newBookForm.style.display = 'flex';
})

let newBookForm = document.querySelector('.new-book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  let newBookForm = document.querySelector('.new-book-form');
  newBookForm.style.display = 'none';
})

function render() {
  let booksContainer = document.querySelector('.books-container');
  booksContainer.innerHTML = '';

  for (let bookIndex in myLibrary) {
    let book = myLibrary[bookIndex];

    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <div class='title'>Title: ${book.title}</div>
      <div class='author'>Author: ${book.author}</div>
      <div class='pages'>Pages: ${book.pages}</div>
      <div class='read'>Read: ${book.read}</div>
      <div class='update'>Update?</div>
      <div class='delete'>Delete</div>
    `;
    booksContainer.appendChild(bookCard);
  }
}