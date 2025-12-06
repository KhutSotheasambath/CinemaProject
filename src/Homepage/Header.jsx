import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cinemalogo from "../image/cinemalogo.png";
import { FaUser } from "react-icons/fa";
import { LuTicketMinus } from "react-icons/lu";
import { PiBellRinging } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import {
  IoHomeOutline,
  IoHomeSharp,
  IoLocationOutline,
  IoLocation,
} from "react-icons/io5";
import { MdOutlineLocalOffer, MdLocalOffer } from "react-icons/md";
import { RiDrinksLine, RiDrinksFill } from "react-icons/ri";
import { Date28 } from "./Datamovies";
import { coming } from "../Coming/Datacoming";

function Header() {
  const location = useLocation();

  // ✅ FIX: Hooks must be INSIDE the component
  const [searchInput, setSearchInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setSearchInput("");
    setSearchOpen(false);
  }, [location.pathname]);

  // Combine both datasets
  const allMovies = [
    ...Date28.map((m) => ({ ...m, type: "now" })),
    ...coming.map((m) => ({ ...m, type: "coming" })),
  ];

  // Filter movies from both lists
  const filterMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const navItems = [
    {
      path: "/",
      label: "Home",
      IconOutline: IoHomeOutline,
      IconFilled: IoHomeSharp,
    },
    {
      path: "/cinema",
      label: "Cinema",
      IconOutline: IoLocationOutline,
      IconFilled: IoLocation,
    },
    {
      path: "/offers",
      label: "Offers",
      IconOutline: MdOutlineLocalOffer,
      IconFilled: MdLocalOffer,
    },
    {
      path: "/FB",
      label: "F&B",
      IconOutline: RiDrinksLine,
      IconFilled: RiDrinksFill,
    },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col px-4 md:px-20 pt-7 pb-5 bg-white/10 backdrop-blur-md border-b border-white/30">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Search Bar */}
          <div className="flex-1 min-w-[200px] max-w-sm">
            <div className="flex items-center px-4 py-2 bg-white/10 text-white/50 rounded-full border border-white/10 focus-within:border-white/40">
              <input
                type="text"
                placeholder="Search Movies..."
                className="bg-transparent text-white placeholder-white/50 focus:outline-none flex-1"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setSearchOpen(e.target.value.length>0);
                }}
              />
              <IoSearchSharp className="text-2xl text-white/70" />
            </div>
          </div>

          {/* Movies Grid (Search Results) */}
          {searchOpen && (
            <div className="absolute top-full w-[500px] bg-black/50 backdrop-blur-md p-5 mt-1 rounded-2xl max-h-[500px] overflow-y-auto shadow-2xl">
              <h2 className="text-white text-2xl font-bold mb-4">Search</h2>

              <div className="flex flex-col gap-6 ">
                {filterMovies.map((movie) => (
                  <Link
                    key={movie.id}
                    to={
                      movie.type === "coming"
                        ? `/coming/${movie.id}`
                        : `/movie/${movie.id}`
                    }
                    className="flex items-center gap-5 p-3 rounded-xl border-b border-white/20 hover:bg-white/5 transition"
                  >
                    {/* Poster */}
                    <img
                      src={movie.Image}
                      alt={movie.title}
                      className="w-28 h-40 object-cover rounded-lg"
                    />

                    {/* Info */}
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        {movie.title}
                      </h3>
                      <p className="text-white/70 mt-1">{movie.Date}</p>
                    </div>
                  </Link>
                ))}

                {filterMovies.length === 0 && (
                  <p className="text-white/50 text-center py-4">
                    No movies found.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={cinemalogo}
                alt="Cinema Logo"
                className="w-[100px] md:w-[120px] h-auto"
              />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-5">
            <Link to="/ticket">
              <button className="flex items-center gap-2 px-4 md:px-5 py-2 bg-white/10 text-white cursor-pointer rounded-lg font-medium hover:border border-white/10 transition-all">
                <LuTicketMinus />
                <span className="hidden sm:inline">Ticket</span>
              </button>
            </Link>

            <Link to="/login">
              <button className="flex items-center gap-2 px-4 md:px-5 py-2 bg-white/10 cursor-pointer text-white rounded-lg font-medium hover:border border-white/10 transition-all">
                <FaUser />
                <span className="hidden sm:inline">Join Now</span>
              </button>
            </Link>

            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:border border-white/10 transition-all">
              <PiBellRinging className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 md:gap-6 text-white/50 mt-5 text-base md:text-lg font-medium overflow-x-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = isActive ? item.IconFilled : item.IconOutline;

            return (
              <Link key={item.path} to={item.path}>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <Icon
                    className={`${
                      isActive ? "text-red-600" : "group-hover:text-white"
                    } transition-colors`}
                  />
                  <p
                    className={`${
                      isActive ? "text-white" : "hover:text-white"
                    } whitespace-nowrap transition-colors`}
                  >
                    {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Header;
