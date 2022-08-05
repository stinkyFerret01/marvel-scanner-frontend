import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

////////////////

import Header from "./components/header";
import Home from "./pages/home";
import Comic from "./pages/comic";
import Comics from "./pages/comics";
import Character from "./pages/character";
import Characters from "./pages/characters";
import Footer from "./components/footer";

////////////////

function App() {
  ////

  return (
    <section className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comic" element={<Comic />} />
        </Routes>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
