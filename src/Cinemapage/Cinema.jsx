import React from "react";
import cinema1 from "../image/cinema1.jpeg";
import { IoSearchSharp } from "react-icons/io5";
import { location } from "./Locationdata";
import { IoLocationSharp } from "react-icons/io5";

const images = [cinema1];

function Cinema() {
  return (
    <div>
      <div>
        <img src={images[0]} alt="" className="rounded-2xl mt-[200px] h-full w-full object-cover"/>
      </div>
      <div className="text-white text-4xl font-bold m-4">
        <p>Cinema:</p>
      </div>
      <div>
        <div
          className="flex items-center px-4 py-4
                     bg-white/10 text-white/50 
                     rounded-2xl border border-white/10
                     focus-within:border-white/40 mt-5"
        >
          <input
            type="text"
            placeholder="Search Movies..."
            className="bg-transparent text-white placeholder-white/50 
                       focus:outline-none flex-1"
          />

          <IoSearchSharp className="text-2xl text-white/70 " />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-6 p-6">
          {location.map((location, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-2xl  border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {/* Image Wrapper */}
              <div className="flex justify-center items-center p-4">
                <img
                  src={location.image}
                  alt={location.title}
                  className="h-70 w-80 object-cover rounded-2xl"
                />
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mt-1">
                  {location.title}
                </h2>
                <div className="flex items-center gap-1.5">
                <IoLocationSharp  className="text-red-700"/>
                <p className="text-sm text-white/70">{location.floor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cinema;
