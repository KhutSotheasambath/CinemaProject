import React from "react";
import cinema1 from "../image/cinema1.jpeg";
import { Link } from "react-router-dom";
import { news } from "./ActivityData";


function Acivity() {
  return (
    <div>
      <div className="mt-[200px]">
        <img
          src={cinema1}
          alt="cinema1"
          className="rounded-2xl mt-5 h-full w-full object-cover"
        />
      </div>
      <div className="m-4 mt-[50px]">
        <p className="text-4xl text-white font-bold">Publications</p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-6 p-6 ">
          {news.map((offer, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {/* Image Wrapper */}
              <div className="flex justify-center items-center p-4">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-50 w-85 object-cover rounded-2xl"
                />
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mt-1 line-clamp-2">
                  {offer.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acivity;
