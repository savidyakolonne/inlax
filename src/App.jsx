import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Components
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import ProjectsPage from "./components/Projects/ProjectPage/ProjectsPage";
import Contact from "./components/Contact/Contact";
import Chatbot from "./components/Chatbot/Chatbot";
import Webdev from "./components/Services/Webdev";
import About from "./components/About/About";
import UIUX from "./components/Services/UIUX";
import Sofdev from "./components/Services/Sofdev";
import CMSdev from "./components/Services/CMSdev";
import Preloader from "./components/Preloader/Preloader"; 
import ProjectDetail from "./components/Projects/ProjectDetail/ProjectDetail";

function Home() {
  useEffect(() => {
    document.title = "iNLAX | We Build Digital Solutions";
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Projects />
      <Contact />
      
    </>
  );
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

   useEffect(() => {
      document.title = "iNLAX | We build Digital Solution";
    }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      <div className="absolute top-0 z-[-2] w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/sofdev" element={<Sofdev />} />
          <Route path="/uiuxpg" element={<UIUX />} />
          <Route path="/cmsdev" element={<CMSdev />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
