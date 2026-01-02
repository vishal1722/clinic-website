import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ServiceSection from "./pages/ServiceSection";
import DoctorsSection from "./pages/DoctorsSection";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/doctors" element={<DoctorsSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
