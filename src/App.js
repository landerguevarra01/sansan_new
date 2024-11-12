import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Hero from "./HeroBanner/Hero";
import Menu from "./Navbar/Menu";
import Featured from "./Works/Featured";
import Remarks from "./Creative/Remarks";
import Me from "./Contact/Me";
import Footer from "./Footer/Footer";
import MarqueeText from "./Creative/MarqueeText";
import "./App.css";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <div className="flex flex-col w-full px-0">
          <div
            className={`flex flex-col justify-center items-center z-10 my-24 px-20 sticky top-0 pt-4 ${
              isSticky ? "bg-gradient-to-t from-transparent to-black" : ""
            }`}
          >
            <Menu />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Featured />
          </div>
          <div className="flex flex-col my-40">
            <MarqueeText />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Remarks />
          </div>
          <div className="flex flex-col justify-center items-center my-40">
            <Me />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="divider2" />
          </div>
          <div className="flex flex-col justify-center items-center mt-40">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
