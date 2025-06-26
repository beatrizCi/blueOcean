import React from "react";

function Hero() {
  return (
    <div className="absolute inset-0 flex items-end justify-between px-10 pb-10 text-white">
      <div className="max-w-xl">
        <h1 className="text-5xl font-semibold mb-4 leading-tight">
          The ocean can't filter <br />
          <span className="font-normal">our mess. So we do.</span>
        </h1>
      </div>
      <div className="max-w-md text-right">
        <p className="mb-5 text-sm font-bold">
          Over 11 million tons of plastic enter the ocean every year. We deploy cleanup drones to collect waste and protect marine life before it's too late.
        </p>
        <div className="flex justify-end gap-4">
          <button className="bg-white text-black px-4 py-2 rounded">Join the mission</button>
          <button className="border border-white px-4 py-2 rounded">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
