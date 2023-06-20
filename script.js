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
const addSuggestedButtons = document.querySelectorAll(".add-suggested");
addSuggestedButtons.forEach(button => button.addEventListener('click', addSuggested))
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
    const form = document.querySelector(".create-book");
    if(!form.checkValidity()) {
        return;
    }
    else {
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
    
}

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function makeBook (title, author, pages, read) {

    //Creating book object
    const newBook = new Book(title, author, pages, read);
    books.push(newBook);

    //creating DOM elements
    const container = document.createElement("article");
    const header = document.createElement("h3");
    const info = document.createElement("dl");
    const authorLabel = document.createElement("dt");
    const authorInfo = document.createElement("dd");
    const pagesLabel = document.createElement("dt");
    const pagesInfo = document.createElement("dd");
    const readLabel = document.createElement("dt");
    const readInfo = document.createElement("dd");
    const readCheckbox = document.createElement("input");

    //setting classes/attributes
    container.classList.add("book");
    header.classList.add("book-title");
    header.textContent = title;
    authorLabel.textContent = "Author:";
    authorInfo.textContent = author;
    pagesLabel.textContent = "Pages:";
    pagesInfo.textContent = pages;
    readLabel.textContent = "Read:";
    readCheckbox.classList.add("read-button");
    readCheckbox.type = "checkbox";
    readCheckbox.name = "read-button";
    if(read === true) readCheckbox.checked = true;

    //appending elements
    readInfo.appendChild(readCheckbox);
    info.append(authorLabel, authorInfo, pagesLabel, pagesInfo, readLabel, readInfo);
    container.append(header, info);

    //adding event listeners

    return container;
}

function addSuggested () {
    //"this" is the button to add book
    const book = this.parentNode.parentNode;
    book.remove();
    const userLibrary = document.querySelector(".user.content");
    userLibrary.appendChild(book);
    this.remove();
}