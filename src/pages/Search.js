import PropTypes from "prop-types";
import Book from "../components/Book";
import { Link } from "react-router-dom";

const Search = ({ bookStatus, query, searchBooks, updatingShelf }) => {
  const inputSearchHandler = (event) => {
    searchBooks(event.target.value);

    console.log(query);
  };
  // const UpdatedShelf = userInputResults.map((s) => {
  //   const book = books.find((b) => b.id === s.id);
  //   return book ? { ...s, shelf: book.shelf } : s;
  // });

  // userInputResults.forEach((s) => {
  //   books.forEach((book) => {
  //     if (book.id === s.id) book.shelf = s.shelf;
  //   });
  // });

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
            {updatingShelf.length === 0 ? (
              <p>No Books Found!</p>
            ) : (
              query &&
              updatingShelf.map((book) => (
                <Book book={book} key={book.id} bookStatus={bookStatus} />
              ))
            )}
            {/* {query &&
              userInputResults.map((book) => (
                <Book book={book} key={book.id} bookStatus={bookStatus} />
              ))} */}
          </ol>
        </div>
      </div>
    </div>
  );
};
Search.propTypes = {
  bookStatus: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  searchBooks: PropTypes.func.isRequired,
  userInputResults: PropTypes.array.isRequired,
};
export default Search;
