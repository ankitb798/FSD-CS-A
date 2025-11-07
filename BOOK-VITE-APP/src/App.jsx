import "./App.css";
import Book from "./component/Book";

function App() {
  return (
    <>
      <h1>Book Store</h1>
      <div className="book-container">
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
}

export default App;
