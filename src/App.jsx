import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen w-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute  left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/ocean-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-white h-full flex flex-col min-h-screen">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* About Us Section, far below */}
      <div className="">
        
        <AboutUs />
      </div>
    </div>
  );
}

export default App;