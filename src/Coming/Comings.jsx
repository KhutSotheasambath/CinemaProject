import React from "react";
import { coming } from "./Datacoming";
import { Link } from "react-router-dom";

function Comings() {
  return (
    <div>
      <div>
        <div className="flex items-center mt-4 gap-6">
          <Link to="/">
            <div>
              <button className="text-3xl font-semibold text-gray font-bold text-white/50 cursor-pointer">
                Now Showing
              </button>
            </div>
          </Link>
          <div className="line-gradient-270deg h-10 w-px bg-white/20"></div>
          <div>
            <button className="text-3xl font-semibold text-white text-gray cursor-pointer">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {coming.map((movie, index) => (
          <Link to={`/coming/${movie.id}`}>
            <div
              key={index}
              className="rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {/* Movie Image */}
              <img
                src={movie.Image}
                alt={movie.title}
                className="w-full h-100 object-cover rounded-2xl"
              />

              {/* Movie Info */}
              <div className="p-4">
                <p className="text-sm text-white/70">{movie.Date}</p>
                <h2 className="text-lg font-semibold text-white mt-1">
                  {movie.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Comings;
