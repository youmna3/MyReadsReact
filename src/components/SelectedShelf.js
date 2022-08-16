const SelectedShelf = ({ book, bookStatus }) => {
  const eventChangeHandler = (book, event) => {
    bookStatus(book, event.target.value);
    console.log(book, event.target.value);
  };
  return (
    <div>
      {/* <div className="book-shelf-changer"> */}
      <select onChange={eventChangeHandler}>
        <option value="none" disabled>
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
