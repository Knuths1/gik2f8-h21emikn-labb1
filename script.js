'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


searchField.addEventListener('keyup', (e) =>
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
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');
  //let myBook = ""
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  //console.log("testar",bookList[0])
  let cursor = document.querySelector('.point')
  //let thisbook = []
  cursor.addEventListener('mouseover', (e) => {
  //console.log(e.target.id)
  //my_Book = getOne(e.target.id)
  //let my_Book = getOne(e.target.id)
  //getOne(e.target.id).then(() => (my_Book = resultat));
  //my_Book = getOne(e.target.id);
  console.log(getOne(e.target.id));

  console.log(my_Book);
    //console.log("Hej")
  renderBookItem(my_Book);
})

  //renderBookItem(bookList[1])
}

function renderBookItem(book){
  console.log(book)
  const existingElement = document.querySelector('.book-info');
  const insert = document.getElementById('insert');
  existingElement && insert.removeChild(existingElement);
  let minhtml = BookInfo(book)
  insert.insertAdjacentHTML('afterbegin', minhtml)
}

//renderBookItem(bookList[1]);