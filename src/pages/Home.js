import Shelves from "../components/Shelves";
const Home = ({ books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title"></div>
      <div>
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelves books={books} />
          <Shelves books={books} />
          <Shelves books={books} />
        </div>
      </div>

      {/* <div className="book-title"></div>
      <div className="book-authors"></div> */}
    </div>
  );
};
export default Home;
