import "./App.css";
import Button from "./components/buttons/Buttons";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
