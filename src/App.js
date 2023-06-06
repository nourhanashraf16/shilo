import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBarr from "./components/nav/NavBarr";
import Projects from "./pages/builds/Projects";

const App = () => {
  // use state for loading variable
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="preloader">
          <ScaleLoader
            color="#f87765"
            loading={loading}
            height={80}
            size={150}
            margin={5}
          />
        </div>
      ) : (
        <>
          <NavBarr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
