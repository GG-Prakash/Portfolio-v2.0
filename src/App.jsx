import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero.jsx";
import About from "./components/About"; // import Projects from "./components/Projects";
import Service from "./components/service";
import Navbar   from "./components/navbar";
import WorkflowAutomationCard from "./components/workflowautomationcard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const preview = new URLSearchParams(window.location.search).get("preview");
  const isAboutPreview =
    preview === "about" || window.location.pathname === "/about";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isAboutPreview) {
    return <About />;
  }

  if (loading) return <Preloader />;

  return (
    <div className="flex min-h-screen bg-slate-950">
      <main className="w-full">
        <Navbar />
        <Hero />
        <About />
        <Service />

      </main>
    </div>
  );
}

export default App;
