import Book from "./Book";
import PropTypes from "prop-types";
const Shelves = ({ books, status, bookStatus, type }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{status}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === type)
            .map((book) => (
              <Book book={book} key={book.id} bookStatus={bookStatus} />
            ))}
        </ol>
      </div>
    </div>
  );
};
Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  bookStatus: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default Shelves;
