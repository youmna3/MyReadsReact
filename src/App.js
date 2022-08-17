import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  const [searchPage, setSearchPage] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
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
      <Routes>
        <Route
          path="/"
          element={<Home books={books} bookStatus={() => {}} />}
        />
        {/* {!isLoading && <Home books={books}  bookStatus={() => {}} />} */}
        {/* {isLoading && <p>Loading...</p>} */}
        <Route
          path="/search"
          element={<Search books={books} bookStatus={() => {}} />}
        />
      </Routes>
    </div>
  );
}

export default App;
