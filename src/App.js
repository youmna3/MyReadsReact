import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);
  console.log(books);
  return (
    <div className="app">
      {/* <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div> */}
      <Home books={books} />
      <Search />
    </div>
  );
}

export default App;
