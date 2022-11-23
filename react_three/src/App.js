import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./Components/BookList";
import WarningComponent from "./Components/WarningComponent";
import MyBadge from "./Components/MyBadge";

function App() {
  return (
    <>
      <WarningComponent alertText="Alert alert" />
      <MyBadge badgeText="Hello hello" color="success" />
      <BookList />
    </>
  );
}

export default App;
