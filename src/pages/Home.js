import Shelves from "../components/Shelves";
const Home = () => {
  return (
    <div className="list-books">
      <div className="list-books-title"></div>
      <div>
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelves />
          <Shelves />
          <Shelves />
        </div>
      </div>

      <div className="book-title">To Kill a Mockingbird</div>
      <div className="book-authors">Harper Lee</div>
    </div>
  );
};
export default Home;
