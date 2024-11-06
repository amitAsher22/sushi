import "./App.css";
import Header from "./components/Header";

import English from "./components/English";
import Hebrew from "./components/Hebrew";
import EhHeader from "./components/EhHeader";
import { Route, Routes, useParams } from "react-router-dom";
import React, { useState } from "react";
import ".././src/style/Mobile.css";

function App() {
  const [toggle, setToggle] = useState("en");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hebrew />} />
        <Route path="/en" element={<English />} />
      </Routes>
    </div>
  );
}

export default App;
{
}
