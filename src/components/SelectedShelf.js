import PropTypes from "prop-types";

//move the books bet the shelves
const SelectedShelf = ({ book, bookStatus }) => {
  const shelfChangeHandler = (event) => {
    bookStatus(book, event.target.value);
  };
  return (
    <div>
      <select
        value={book.shelf ? book.shelf : "none"}
        // onChange={(e) => bookStatus(book, e.target.value)}
        onChange={shelfChangeHandler}
      >
        {/* <option value="none" disabled> */}
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    // </div>
  );
};
SelectedShelf.propTypes = {
  book: PropTypes.object.isRequired,
  bookStatus: PropTypes.func.isRequired,
};
export default SelectedShelf;
