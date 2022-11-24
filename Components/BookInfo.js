const BookInfo = (book) => {
    //console.log(book)
    let html = `
              <div class="book-info -ml-52">
                <div class="rounded-md border-2 border-black bg-gray-400 w-full mx-auto w-44">
                 <div class="p-3">
                  <img src= "${book.coverImage}"/>
                    <div>------------------------</div>
                      <div>Author: ${book.author}</div>
                        <div>Title: ${book.title}</div>
                          <div>Pages: ${book.pages}</div>
                            <div>Release Date: ${book.releaseDate}</span>
                          <div>
                        <div>
                      </div> 
                    </div>
                  </div>
                  </div>
              </div>`;
    return html;


    // const bild = book.coverImage
    // const title = book.title
    // const author = book.author
    // const release = book.release

    // let html = `
    //             <div class="rounded-md border-2 border-blue-400 bg-white w-full mx-auto w-40">
    //             <div class="">
    //               <div class="">
    //                 <div class="">
    //                   <img src=    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstephenking.com%2Fpromo%2Fdark-tower-2016-collection%2Fimages%2Fthe_gunslinger.jpg"/>
    //                   <div class="">
    //                     <span class="">Author: ${book.title} </span>
    //                     <span class="">Title: ${book.author}</span>
    //                     <span class="">Pages: ${book.pages}</span>
    //                     <span class="">Release Date: ${book.releaseDate}</span>
    //                   </div> 
    //                 </div>
    //               </div>
    //             </div>
    //           </div>`;
    // return html;
    //console.log(book)

    // let html = `<h1>TEST</h1>`
    // return html
  };
