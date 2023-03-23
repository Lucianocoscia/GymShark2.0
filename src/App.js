//libraries
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//pages
import Home from "./Pages/Home/Home";
import Classes from "./Pages/Classes/Classes";
import Nutrition from "./Pages/Schedule/Schedule";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

//css
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Nutrition />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
