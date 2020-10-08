function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));

/* return fetch('https://anapioficeandfire.com/api/books')
 - Got the test to pass, but still wasn't able to view list on the browser!!
*/

}

function renderBooks(books) {
  
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
