import "./styles/style.css";
import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import VideosPage from "./pages/VideosPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videosPage" element={<VideosPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
