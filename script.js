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
  for (let book in myLibrary) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    let title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = 'Title:';

    let author = document.createElement('div');
    author.classList.add('author');
    author.innerHTML = 'Author:';

    let pages = document.createElement('div');
    pages.classList.add('pages');
    pages.innerHTML = 'Pages:';

    let read = document.createElement('div');
    read.classList.add('read');
    read.innerHTML = 'Read:';

    let update = document.createElement('div');
    update.classList.add('update');
    update.innerHTML = 'Update?';
    
    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = 'Delete';

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(update);
    bookCard.appendChild(deleteButton);

    booksContainer.appendChild(bookCard);
  }
}