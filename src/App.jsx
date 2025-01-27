import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Campuses from "./Sections/Campuses";
import AppSection from "./Sections/AppSection";
import Reviews from "./Sections/Reviews";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <main className="text-neutral-800 overflow-x-hidden antialiased">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Campuses />
      <AppSection />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
