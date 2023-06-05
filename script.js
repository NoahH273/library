const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener('click', formClick)

function formClick () {
    const overlay = document.querySelector(".overlay");
    overlay.style.visibility = "visible";
}
