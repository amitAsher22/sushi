import "./App.css";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import Menu from "./components/Menu";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Header />
      </div>
      <SectionOne />
      <Menu />
      <Work />
    </div>
  );
}

export default App;
