import "./App.css";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Header />
      </div>
      <SectionOne />
      <Menu />
    </div>
  );
}

export default App;
