import React from "react";
import { Link } from "react-router-dom";
import ticketcinema from "../image/ticketcinema.png";

function Ticket() {
  return (
    <div>
      <div>
        <div className="flex items-center mt-[200px] gap-6">
          <button className="text-3xl font-semibold text-gray font-bold text-white">
            Upcoming
          </button>
          <div className="line-gradient-270deg h-10 w-px bg-white/20"></div>
          <Link to="/history">
            <button className="text-3xl font-semibold text-gray cursor-pointer">
              History
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center py-8 px-4">
        <div className="max-w-4xl w-full">
          <img
            src={ticketcinema}
            alt="ticketcinema"
            className="w-full h-auto max-h-[20vh] object-contain filter brightness-0 invert"
          />
        </div>
      </div>
      <div className="flex items-center text-white font-medium text-2xl justify-center">
        <h1>No UpComing Tickets</h1>
      </div>
    </div>
  );
}

export default Ticket;
