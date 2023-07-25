import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ScrollUp from "./components/ScrollUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <ScrollUp />
    </Router>
  );
}

export default App;
