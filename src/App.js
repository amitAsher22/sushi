import "./App.css";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import Menu from "./components/Menu";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Header />
      </div>
      <SectionOne />
      <Menu />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
