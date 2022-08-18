import SelectedShelf from "./SelectedShelf";
import PropTypes from "prop-types";
const Book = ({ book, bookStatus }) => {
  const bookCover = book.imageLinks ? book.imageLinks.smallThumbnail : "none";
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${bookCover}")`,
            }}
          >
            <div className="book-shelf-changer">
              <SelectedShelf book={book} bookStatus={bookStatus} />
            </div>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {/* <div className="book-authors">{book.authors}</div>*/}
        {book.authors && (
          <div className="book-authors">{book.authors.join(", ")}</div>
        )}
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookStatus: PropTypes.func.isRequired,
};
export default Book;
