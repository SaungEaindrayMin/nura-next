import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import CustomCursor from "./components/ui/CustomCusor";
import Services from "./pages/Services/Services";
import Cases from "./pages/Cases/Cases";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary">
        <CustomCursor />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}
