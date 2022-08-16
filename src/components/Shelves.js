import Book from "./Book";
const Shelves = ({ books, status, bookStatus }) => {
  //const books_of_shelf = books.filter((book) => book.shelf === status);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{status}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} key={book.id} bookStatus={bookStatus} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelves;
