import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./pages/Home/home";
import Navbar from "./Components/Navbar";
import Technology from "./Components/Technology";
import Service from "./pages/Service/Service";
import Career from "./pages/Career/Career.jsx";
import AboutSection from "./pages/About/About.jsx";
import JourneySection from "./Components/JourneySection";
import Footer from "./Components/Footer";
import Program from './pages/Progarm/program.jsx';
import GetStart from "./pages/getstart/getstart";
import Comunity from "./pages/Comunity/comunity.jsx";
// import Product from "./pages/Product/product.jsx"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen select-none bg-[#0c0e20]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/journey" element={<JourneySection />} />
          <Route path="/services" element={<Service />} />
          <Route path="/getstart" element={<GetStart />} />
          <Route path="/program" element={<Program />} />
          <Route path="/comunity" element={<Comunity />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
