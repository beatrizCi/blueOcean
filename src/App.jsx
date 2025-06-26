import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (

    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/ocean-background.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-white h-full">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;