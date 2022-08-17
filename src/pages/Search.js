import PropTypes from "prop-types";

const Search = ({ books, bookStatus }) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          {/* <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a> */}
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
