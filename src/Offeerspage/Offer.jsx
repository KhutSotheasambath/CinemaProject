import React from "react";
import cover5 from "../image/cover5.jpeg";
import { offers } from "./Offersdata";

const images = [cover5];
function Offer() {
  return (
    <div>
      <div>
        <img src={images[0]} alt="" className="rounded-2xl mt-[200px] h-full w-full object-cover" />
      </div>
      <div className="text-white text-4xl font-bold m-4">
        <p>Promotions</p>
      </div>
      
      <div>
        <div className="grid grid-cols-3 gap-6 p-6 ">
          {offers.map((offer, index) => (
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

export default Offer;
