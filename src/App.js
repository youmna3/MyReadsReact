import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  //const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
  //console.log(books);

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

  //users input in searchbpx
  const updateQuery = (query) => {
    //   // then calls setQuery() with the user's search query as the argument.
    setQuery(query.trim());
  };
  // const inputSearchHandler = (event) => {
  //   setQuery(query.trim(), event.target.value);
  //   console.log(event.target.value);
  // };
  const showingbooks =
    query === " " ? books : books.filter((book) => book.title);

  //edit the list of books from the database
  const shelfChangerHomePage = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setBooks(await BooksAPI.getAll());
  };

  const shelfChangerSearchPage = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setBooks(await BooksAPI.getAll());
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home books={books} bookStatus={shelfChangerHomePage} />}
        />
        {/* element={
             !isLoading && <Home books={books} bookStatus={shelfChanger} /> &&
             isLoading && <p>Loading...</p>
           } */}

        <Route
          path="/search"
          element={
            <Search
              books={books}
              bookStatus={shelfChangerSearchPage}
              query={query}
              searchBooks={updateQuery}
              showingbooks={showingbooks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
