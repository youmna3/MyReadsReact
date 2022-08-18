import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  const [userInputResults, setUserInputResults] = useState([]);
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    const getBooksForSearch = async () => {
      if (query) {
        const res = await BooksAPI.search(query);
        console.log(res);
        // handle invalid queries
        res.error ? setUserInputResults([]) : setUserInputResults(res);
      }
    };
    getBooksForSearch();
  }, [query]);
  const updateQuery = (query) => {
    setQuery(query);
    // if (query.trim() === " ") {
    //   setUserInputResults([]);
    // }
  };
  // useEffect(() => {
  //   if (query) {
  //     BooksAPI.search(query).then((data) => {
  //       if (data.error) {
  //         console.log(data);
  //       } else {
  //         setUserInputResults(data);
  //       }
  //     });
  //   }
  // }, [query]);

  //users input in searchbpx

  // const inputSearchHandler = (event) => {
  //   setQuery(event.target.value);
  //   //   console.log(event.target.value);
  // };

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
              userInputResults={userInputResults}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
