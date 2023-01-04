import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import NewsLetter from "./Components/NewsLetter";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeroSection />
        <NewsLetter />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
