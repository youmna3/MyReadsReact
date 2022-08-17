const SelectedShelf = ({ book, bookStatus }) => {
  const shelfChangeHandler = (book, event) => {
    bookStatus(book, event);
    console.log(book, event);
  };
  return (
    <div>
      {/* <div className="book-shelf-changer"> */}
      {/* <select value={book.shelf ? book.shelf : "none"} onChange={bookStatus}> */}
      <select
        onChange={shelfChangeHandler}
        value={book.shelf ? book.shelf : "none"}
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
export default SelectedShelf;
