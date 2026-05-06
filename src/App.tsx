import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/dh-portfolio" element={<Home />} />
            <Route path="/dh-portfolio/about" element={<About />} />
            <Route path="/dh-portfolio/projects" element={<Projects />} />
            <Route path="/dh-portfolio/contact" element={<Contact />} />
            <Route path="/dh-portfolio/admin" element={<Admin />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}