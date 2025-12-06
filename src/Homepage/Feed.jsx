import React from "react";
import cover5 from "../image/cover5.jpeg";
import { Link } from "react-router-dom";


function Feed() {
  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cover5})` }}
      ></div>

      {/* Red gradient overlay on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/100 to-transparent"></div>

      {/* Text content */}
      <div className="relative flex flex-col justify-center h-full pl-10 w-[500px]">
        <h1 className="text-white text-4xl font-bold mb-3">Unlock Incredible</h1>
        <h1 className="text-white text-4xl font-bold mb-4">Perks with...</h1>
        <p className="text-white/80 text-[14px] font-light mb-6">
          With a Legend Cinema Membership Card, enjoy exclusive benefits every time you watch a movie at Legend.
        </p>
        <button className="text-red-500 px-6 py-3 bg-white rounded-3xl font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Feed;
