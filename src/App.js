import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./HeroBanner/Hero";
import Menu from "./Navbar/Menu";
import Featured from "./Works/Featured";
import Remarks from "./Creative/Remarks";
import Me from "./Contact/Me";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <div className="flex flex-col gap-8 w-full max-w-[1207px]">
          <Menu />
          <Featured />
          <Remarks />
          <Me />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
