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
// import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audio] = useState(new Audio("/POWERPUFF.mp3"));

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audio.pause();
    } else {
      audio.play();
      audio.currentTime = 2.5;
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="absolute top-8 right-8 cursor-pointer"
        onClick={toggleAudio}
      >
        <svg
          id="wave"
          className={isAudioPlaying ? "wave-playing" : ""}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 38.05"
        >
          <title>Audio Wave</title>
          <path
            id="Line_1"
            d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0V16a1,1,0,0,0-1-1H0.91Z"
          />
          <path
            id="Line_2"
            d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0V10A1,1,0,0,0,7,9H6.91Z"
          />
          <path
            id="Line_3"
            d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0V1a1,1,0,0,0-1-1H12.91Z"
          />
          <path
            id="Line_4"
            d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0V11a1,1,0,0,0-1-1H18.91Z"
          />
          <path
            id="Line_5"
            d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0V16a1,1,0,0,0-1-1H24.91Z"
          />
          <path
            id="Line_6"
            d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0V11a1,1,0,0,0-1-1H30.91Z"
          />
          <path
            id="Line_7"
            d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0V1a1,1,0,0,0-1-1H36.91Z"
          />
          <path
            id="Line_8"
            d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0V10a1,1,0,0,0-1-1H42.91Z"
          />
          <path
            id="Line_9"
            d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0V16a1,1,0,0,0-1-1H48.91Z"
          />
        </svg>
      </div>
      {/* <div
        className="absolute top-8 right-12 text-responsiveParagraph cursor-pointer"
        onClick={toggleAudio}
      >
        {isAudioPlaying ? (
          <HiMiniSpeakerWave className="transition-transform duration-300 ease-in-out text-[#DB0102]" />
        ) : (
          <HiMiniSpeakerXMark className="transition-transform duration-300 ease-in-out" />
        )}
      </div> */}

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div id="home">
                <Hero />
              </div>
            }
          />
        </Routes>
        <div className="flex flex-col w-full px-0">
          <div
            className={`flex flex-col justify-center items-center z-10 my-24 px-20 sticky top-0 pt-4 ${
              isSticky ? "bg-gradient-to-t from-transparent to-black" : ""
            }`}
          >
            <Menu />
          </div>
          <div
            id="projects"
            className="flex flex-col justify-center items-center"
          >
            <Featured />
          </div>
          <div className="flex flex-col my-40">
            <MarqueeText />
          </div>
          <div id="about" className="flex flex-col justify-center items-center">
            <Remarks />
          </div>
          <div
            id="contact"
            className="flex flex-col justify-center items-center my-40"
          >
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
