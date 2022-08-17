import Shelves from "../components/Shelves";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Home = ({ books, bookStatus, onNavigate }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
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

      <div className="open-search">
        <Link to="/search">Add a book</Link>
        {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
  bookStatus: PropTypes.func.isRequired,
};
export default Home;
