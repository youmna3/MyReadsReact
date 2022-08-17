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
    //setIsLoading(true);
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      //setIsLoading(false);
    };

    getBooks();
  }, []);

  //Update the list of books
  // const updateBooksList = async (book, event) => {
  //   book.shelf = event.target.value;
  //   await BooksAPI.update(book, book.shelf);
  //   //const updatedBooks = await BooksAPI.getAll(books);
  //   setBooks(books.concat({ ...book, shelf: event.target.value }));
  // };

  return (
    <div className="app">
      <div className="open-search">
        {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
      </div>
      <Home books={books} bookStatus={() => {}} />
      <Search books={books} bookStatus={() => {}} />
    </div>
  );
}

export default App;
