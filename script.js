const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener('click', formOpen)
const closeFormButton = document.querySelector(".close-button");
closeFormButton.addEventListener('click', formClose);
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', addBook)
const overlay = document.querySelector(".overlay");
overlay.addEventListener('click', formClose);
const popup = document.querySelector(".create-book");
popup.addEventListener('click', (e) => e.stopPropagation());
let books = [];


function formOpen () {
    const overlay = document.querySelector(".overlay");
    overlay.style.visibility = "visible";
}

function formClose (e) {
    console.log(e);
    console.log(this);
    const overlay = document.querySelector(".overlay");
    overlay.style.visibility = "hidden";
}

function addBook (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const newBook = makeBook(title, author, pages, read);
    const content = document.querySelector(".content");
    content.appendChild(newBook);
    formClose();
}

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function makeBook (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    books.push(newBook);
    const container = document.createElement("article");
    container.classList.add("book");
    const header = document.createElement("h3");
    header.classList.add("book-title");
    header.textContent = title;
    const info = document.createElement("dl");
    const authorLabel = document.createElement("dt");
    authorLabel.textContent = "Author:";
    const authorInfo = document.createElement("dd");
    authorInfo.textContent = author;
    const pagesLabel = document.createElement("dt");
    pagesLabel.textContent = "Pages:";
    const pagesInfo = document.createElement("dd");
    pagesInfo.textContent = pages;
    const readLabel = document.createElement("dt");
    readLabel.textContent = "Read:";
    const readInfo = document.createElement("dd");
    const readCheckbox = document.createElement("input");
    readCheckbox.classList.add("read-button");
    readCheckbox.type = "checkbox";
    readCheckbox.name = "read-button";
    readInfo.appendChild(readCheckbox);
    info.append(authorLabel, authorInfo, pagesLabel, pagesInfo, readLabel, readInfo);
    container.append(header, info);
    return container;




}