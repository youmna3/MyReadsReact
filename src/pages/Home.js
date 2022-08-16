import Shelves from "../components/Shelves";
const Home = ({ books, bookStatus }) => {
  return (
    <div className="list-books">
      <div className="list-books-title"></div>
      <div>
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelves
            status="Currently Reading"
            type="currentlyReading"
            books={books}
            bookStatus={bookStatus}
          />
          <Shelves
            status="Want To Read"
            type="wantToRead"
            books={books}
            bookStatus={bookStatus}
          />
          <Shelves
            status="Read"
            type="read"
            books={books}
            bookStatus={bookStatus}
          />
        </div>
      </div>

      {/* <div className="book-title"></div>
      <div className="book-authors"></div> */}
    </div>
  );
};
export default Home;
