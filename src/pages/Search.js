import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Search = ({ books, bookStatus }) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" />
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
};
export default Search;
