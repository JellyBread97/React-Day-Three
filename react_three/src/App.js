import WarningSign from "./Components/WarningSign";
import "./App.css";
import MyBadge from "./Components/MyBadge";
import BookList from "./Components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "./Assets/fantasy.json";

function App() {
  return (
    <div>
      <WarningSign alertText="Alert alert"></WarningSign>
      <MyBadge class="badge" badgeText="hello hello"></MyBadge>
      <BookList class="books" books={books}></BookList>
    </div>
  );
}

export default App;
