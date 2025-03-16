import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills"; 
import Education  from "./components/Education";
import "./index.css";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home/" />} /> {/* Redirect to home */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/Education" element={<Education />} />
    </Routes>
  </Router>
);

export default App;
