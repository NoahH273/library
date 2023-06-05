const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener('click', formOpen)
const closeFormButton = document.querySelector(".close-button");
closeFormButton.addEventListener('click', formClose);
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', addBook)

function formOpen () {
    const overlay = document.querySelector(".overlay");
    overlay.style.visibility = "visible";
}

function formClose () {
    const overlay = document.querySelector(".overlay");
    overlay.style.visibility = "hidden";
}

function addBook () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const newBook = new Book(title, author, pages, read);
}

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}