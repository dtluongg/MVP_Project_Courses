import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Teachers from "./pages/Teachers.jsx";
import Booking from "./pages/Booking.jsx";
import Packages from "./pages/Pakages.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
