//libraries
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//pages
import Home from "./Pages/Home/Home";
import Classes from "./Pages/Classes/Classes";
import Schedule from "./Pages/Schedule/Schedule";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Monday from "./Pages/Schedule/Monday";
import Tuesday from "./Pages/Schedule/Tuesday";
import Wednesday from "./Pages/Schedule/Wednesday";
import Thursday from "./Pages/Schedule/Thursday";
import Friday from "./Pages/Schedule/Friday";
import Saturday from "./Pages/Schedule/Saturday";
//css
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule/" element={<Schedule />}>
          <Route path="/schedule/monday" element={<Monday />} exact />
          <Route path="/schedule/tuesday" element={<Tuesday />} />
          <Route path="/schedule/wednesday" element={<Wednesday />} />
          <Route path="/schedule/thursday" element={<Thursday />} />
          <Route path="/schedule/friday" element={<Friday />} />
          <Route path="/schedule/saturday" element={<Saturday />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
