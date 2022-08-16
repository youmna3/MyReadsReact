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
            books={books}
            bookStatus={bookStatus}
          />
          <Shelves
            status="Want To Read"
            books={books}
            bookStatus={bookStatus}
          />
          <Shelves status="Read" books={books} bookStatus={bookStatus} />
        </div>
      </div>

      {/* <div className="book-title"></div>
      <div className="book-authors"></div> */}
    </div>
  );
};
export default Home;
