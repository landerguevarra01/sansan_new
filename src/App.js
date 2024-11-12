import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./HeroBanner/Hero";
import Menu from "./Navbar/Menu";
import Featured from "./Works/Featured";
import Remarks from "./Creative/Remarks";
import Me from "./Contact/Me";
import Footer from "./Footer/Footer";
import MarqueeText from "./Creative/MarqueeText";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center items-center my-40 px-20">
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
