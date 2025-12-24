import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CustomTensileRoofing from "./pages/CustomTensileRoofing";
import ArchitecturalMembranes from "./pages/ArchitecturalMembranes";
import OutdoorShadeCanopies from "./pages/OutdoorShadeCanopies";
import EventPavilionStructures from "./pages/EventPavilionStructures";
import IndustrialFabricCovers from "./pages/Industrial-fabric-structures";
import CarParkingWalkwayShades from "./pages/CarParkingWalkwayStructures";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/custom-tensile-roofing" element={<CustomTensileRoofing />} />
        <Route path="/services/architectural-membranes" element={<ArchitecturalMembranes />} />
        <Route path="/services/outdoor-shade-solutions" element={<OutdoorShadeCanopies/>} />
        <Route path="/services/event-pavilion-structures" element={<EventPavilionStructures/>} />
        <Route path="/services/industrial-fabric-covers" element={<IndustrialFabricCovers/>} />
        <Route path="/services/car-parking-walkway-shades" element={<CarParkingWalkwayShades/>} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
