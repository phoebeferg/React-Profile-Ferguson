import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutMe from "../components/aboutMe";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Resume from "../components/resume";
import "./App.css";

function App() {
  console.log("App is rendering")
  return (
    <div>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
