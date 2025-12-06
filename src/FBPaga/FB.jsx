import React from "react";
import F1 from "../image/F1.jpeg";
import { fbdata } from "./FBData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const images = [F1];
function FB() {
  return (
    <div>
      <div>
        <img src={images[0]} alt="" className="rounded-2xl mt-[200px] h-full w-full object-cover" />
      </div>
      <div className="text-white text-4xl font-bold m-4">
        <p>Choose Cinema</p>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-6 p-6">
          {fbdata.map((f, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300 p-4"
            >
              <div className="flex items-center justify-between">
                {/* Left side: image + text */}
                <div className="flex items-start space-x-3">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-12 w-12 object-cover rounded-sm"
                  />
                  <div className="flex flex-col justify-start">
                    <h2 className="text-lg font-semibold text-white">
                      {f.title}
                    </h2>
                  </div>
                </div>

                {/* Right side: icon */}
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="text-white text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FB;
