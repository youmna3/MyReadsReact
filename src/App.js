import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  console.log(books);
  //get the books from the api
  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);
  // const shelves = async (book, shelf) => {
  //   await BooksAPI.update(book, shelf);
  //   const xeby = await BooksAPI.getAll();
  //   setBooks(xeby);
  // };
  // shelves();
  // const updateBooksList = async (book, shelf) => {
  //   await BooksAPI.update(book, shelf);
  //   const updatedBooks = await BooksAPI.getAll();
  //   setBooks(updatedBooks);
  // };

  return (
    <div className="app">
      {/* <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div> */}
      <Home books={books} bookStatus={() => {}} />
      <Search />
    </div>
  );
}

export default App;
