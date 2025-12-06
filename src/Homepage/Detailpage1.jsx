import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MdTheaters,
  MdAccessTime,
  MdCalendarToday,
  MdRemoveRedEye,
  MdPlayArrow,
  MdClose
} from "react-icons/md";
import { Date28 } from "./Datamovies";

function MovieDetail() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movie = Date28.find(
    (m) => m.id === parseInt(id) || m.id.toString() === id
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen mt-[200px] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl ">
          <div className="grid md:grid-cols-2 gap-0">

            {/* LEFT INFO */}
            <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-black ">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                {movie.title}
              </h1>

              <div className="space-y-5">
                {/* Genre */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <MdTheaters className="text-white text-xl" />
                  </div>
                  <span className="text-white text-lg font-semibold">{movie.genre}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <MdAccessTime className="text-white text-xl" />
                  </div>
                  <span className="text-white text-lg font-semibold">{movie.duration}</span>
                </div>

                {/* Release */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <MdCalendarToday className="text-white text-xl" />
                  </div>
                  <span className="text-white text-lg font-semibold">{movie.release}</span>
                </div>

                {/* Classification */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <MdRemoveRedEye className="text-white text-xl" />
                  </div>
                  <span className="text-white text-lg font-semibold">{movie.classification}</span>
                </div>
              </div>
            </div>

            {/* RIGHT POSTER + PLAY BUTTON */}
            <div className="relative order-1 max-h-[470px] xl:order-2">
              <img
                src={movie.Image}
                alt={movie.title} 
                className="max-w-full transition-opacity opacity-100 h-full w-full object-cover"
              />

              <div class="absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-black to-black/0 xl:top-0 xl:h-full xl:w-[200px] xl:bg-gradient-to-r"></div>

              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={openModal}
              >
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-xl">
                  <MdPlayArrow className="text-white text-5xl ml-1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MODAL POPUP VIDEO ================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={closeModal}   // CLICK OUTSIDE TO CLOSE
        >

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            <MdClose/>
          </button>

          {/* Video Box */}
          <div
            className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}  // STOP closing when clicking iframe
          >
            <iframe
              src={`${movie.video}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      )}

    </div>
  );
}

export default MovieDetail;
