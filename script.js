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

  let elements = document.getElementsByClassName("point");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", (e) => {
      var e = window.event;
      let x_pos = e.clientX + 30;
      let y_pos = e.clientY - 60;
      const rutan = `<div id="bookDetail" class="position absolute top-500px"  style="position: absolute; top: ${y_pos}px; left: ${x_pos}px; opacity: 0.9;"></div>`;
      root.insertAdjacentHTML("afterbegin", rutan);

      let myBook = getOne(e.target.id);
      myBook.then(function (result) {
        renderBookItem(result);
      });
    });
    elements[i].addEventListener("mouseout", (e) => {
      const rutan = document.getElementById("bookDetail");
      rutan.remove();
    });
  }
}

function renderBookItem(book) {
  const existingElement = document.querySelector(".book-info");
  const insert = document.getElementById("bookDetail");
  if (insert != null) {
    existingElement && insert.removeChild(existingElement);
    let minhtml = BookInfo(book);
    insert.insertAdjacentHTML("afterbegin", minhtml);
  }
}
