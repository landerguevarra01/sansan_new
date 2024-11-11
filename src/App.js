import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./HeroBanner/Hero";
import Menu from "./Navbar/Menu";
import Featured from "./Works/Featured";
import Remarks from "./Creative/Remarks";
import Me from "./Contact/Me";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <div className="flex flex-col gap-8">
        <Menu />
        <Featured />
        <Remarks />
        <Me />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
