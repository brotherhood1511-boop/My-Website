import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Military from "./pages/Military.jsx";
import Resume from "./pages/Resume.jsx";
import Travel from "./pages/Travel.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <div className="grid-bg site">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/military" element={<Military />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
