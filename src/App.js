import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
function App() {
  return (
    <div className="app">
      {/* <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div> */}
      <Home />
      <Search />
    </div>
  );
}

export default App;
