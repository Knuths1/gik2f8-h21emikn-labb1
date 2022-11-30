"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector(".book-list");
  const root = document.getElementById("root");
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(bookList));

  var elements = document.getElementsByClassName("point");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", (e) => {
      const rutan = `<div id="bookDetail" class="position absolute"></div>`;
      root.insertAdjacentHTML("beforeend", rutan);

      let myBook = getOne(e.target.id);
      myBook.then(function (result) {
        renderBookItem(result);
      });
    });
    elements[i].addEventListener("mouseout", (e) => {
      const insert = document.getElementById("bookDetail");
      const existingElement = document.querySelector(".book-info");
      existingElement && insert.removeChild(existingElement);
    });
  }
}

function renderBookItem(book) {
  //const rutan = `<div id="bookDetail" class="position absolute"></div>`;
  //root.insertAdjacentHTML("beforeend", rutan);
  const existingElement = document.querySelector(".book-info");
  const insert = document.getElementById("bookDetail");
  existingElement && insert.removeChild(existingElement);
  let minhtml = BookInfo(book);
  insert.insertAdjacentHTML("afterbegin", minhtml);
}
