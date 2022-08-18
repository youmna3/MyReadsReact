import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Search = ({ books, bookStatus, query, searchBooks, showingbooks }) => {
  console.log(query);
  const inputSearchHandler = (event) => {
    searchBooks(event.target.value);
    //console.log(event.target.value);
  };
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/* value={} onChange={} */}
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={inputSearchHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
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
};
export default Search;
