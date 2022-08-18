import PropTypes from "prop-types";
import Book from "../components/Book";
import { Link } from "react-router-dom";
//import { useEffect } from "react";

const Search = ({
  books,
  bookStatus,
  query,
  searchBooks,
  userInputResults,
}) => {
  const inputSearchHandler = (event) => {
    searchBooks(event.target.value);
    console.log(query);
  };
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              //onChange={searchBooks}
              onChange={inputSearchHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {userInputResults.map((book) => (
              <Book book={book} key={book.id} bookStatus={bookStatus} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
Search.propTypes = {
  books: PropTypes.array.isRequired,
  bookStatus: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  searchBooks: PropTypes.func.isRequired,
  userInputResults: PropTypes.array.isRequired,
};
export default Search;
