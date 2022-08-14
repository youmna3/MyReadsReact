import Book from "./Book";
const Shelves = ({ books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelves;
