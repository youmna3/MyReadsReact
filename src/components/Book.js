import SelectedShelf from "./SelectedShelf";
const Book = ({ book }) => {
  const bookCover = book.imageLinks.smallThumbnail;
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
              <SelectedShelf book={book} />
            </div>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};
export default Book;
